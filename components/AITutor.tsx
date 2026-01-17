import React, { useState, useEffect, useRef } from 'react';
import { UITerm, ChatMessage } from '../types';
import { generateAIResponse } from '../services/geminiService';
import { Bot, Send, Loader2, Sparkles } from 'lucide-react';

interface AITutorProps {
  term: UITerm;
}

export const AITutor: React.FC<AITutorProps> = ({ term }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Clear chat when term changes
  useEffect(() => {
    setMessages([]);
    setInput('');
  }, [term.id]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const aiText = await generateAIResponse(userMessage.text, term, messages);

    const botMessage: ChatMessage = { role: 'model', text: aiText };
    setMessages(prev => [...prev, botMessage]);
    setIsLoading(false);
  };

  const handleQuickQuestion = (question: string) => {
    setInput(question);
    // Optional: auto-send
    // handleSend();
  };

  return (
    <div className="flex flex-col h-[500px] border border-slate-800 rounded-xl bg-slate-900 shadow-sm overflow-hidden">
      <div className="bg-slate-900 border-b border-slate-800 p-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-primary-400">
          <Bot size={20} />
          <h3 className="font-semibold text-sm">AI 튜터: {term.name} 학습 중</h3>
        </div>
        <div className="flex items-center gap-1 text-xs text-amber-400 bg-amber-900/20 px-2 py-1 rounded-full border border-amber-800/50">
          <Sparkles size={12} />
          <span>Gemini Powered</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-950/50">
        {messages.length === 0 && (
          <div className="text-center py-8 text-slate-500">
            <Bot size={48} className="mx-auto mb-2 opacity-20" />
            <p className="text-sm"><strong>{term.name}</strong>에 대해 무엇이든 물어보세요!</p>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              <button 
                onClick={() => handleQuickQuestion(`${term.name}의 실제 사용 예시를 알려줘.`)}
                className="text-xs bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-full hover:bg-primary-900/30 hover:border-primary-700 hover:text-primary-400 text-slate-400 transition"
              >
                실제 예시 알려줘
              </button>
              <button 
                onClick={() => handleQuickQuestion(`${term.name} 사용 시 흔히 하는 실수는 뭐야?`)}
                className="text-xs bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-full hover:bg-primary-900/30 hover:border-primary-700 hover:text-primary-400 text-slate-400 transition"
              >
                흔한 실수는?
              </button>
              <button 
                onClick={() => handleQuickQuestion(`${term.name}을 유치원생에게 설명하듯이 쉽게 알려줘.`)}
                className="text-xs bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-full hover:bg-primary-900/30 hover:border-primary-700 hover:text-primary-400 text-slate-400 transition"
              >
                쉽게 설명해줘 (ELI5)
              </button>
            </div>
          </div>
        )}

        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div 
              className={`
                max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed
                ${msg.role === 'user' 
                  ? 'bg-primary-600 text-white rounded-br-none' 
                  : 'bg-slate-800 border border-slate-700 text-slate-200 rounded-bl-none shadow-sm'}
              `}
            >
              <div dangerouslySetInnerHTML={{ __html: msg.text.replace(/\n/g, '<br />') }} />
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-slate-800 border border-slate-700 px-4 py-3 rounded-2xl rounded-bl-none shadow-sm flex items-center gap-2 text-slate-400 text-sm">
              <Loader2 size={16} className="animate-spin" />
              생각 중...
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 bg-slate-900 border-t border-slate-800">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder={`${term.name}에 대해 질문하기...`}
            className="flex-1 px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-sm text-slate-200 placeholder-slate-500"
          />
          <button 
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="p-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};