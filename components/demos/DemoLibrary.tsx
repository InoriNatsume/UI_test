import React, { useState } from 'react';
import { X, ChevronRight, Home, User, Info, Bell, AlertTriangle, CheckCircle, LayoutGrid, StretchHorizontal, Box, CreditCard, Search, ChevronDown, Menu, ArrowRight } from 'lucide-react';

// --- Header Demo ---
export const HeaderDemo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-slate-100 rounded-xl border border-dashed border-slate-300">
      <div className="w-full max-w-md bg-slate-50 border border-slate-200 rounded-lg overflow-hidden shadow-sm">
        {/* The Header Area */}
        <header className="bg-white border-b border-slate-200 p-3 flex items-center justify-between sticky top-0 shadow-sm z-10">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-primary-600 rounded"></div>
            <span className="font-bold text-slate-800 text-sm">Logo</span>
          </div>
          <nav className="hidden sm:flex gap-3 text-xs text-slate-600 font-medium">
            <span className="hover:text-primary-600 cursor-pointer">홈</span>
            <span className="hover:text-primary-600 cursor-pointer text-primary-600">소개</span>
            <span className="hover:text-primary-600 cursor-pointer">서비스</span>
          </nav>
          <div className="w-6 h-6 sm:hidden bg-slate-100 rounded flex items-center justify-center">
            <Menu size={14} />
          </div>
        </header>
        
        {/* Placeholder Content */}
        <div className="h-32 p-4 bg-slate-50 flex items-center justify-center text-xs text-slate-400">
          본문 콘텐츠 영역 (Main Content)
        </div>
      </div>
      <p className="mt-3 text-xs text-slate-500 text-center">헤더는 항상 최상단에 위치하여 <br/>네비게이션과 브랜딩을 담당합니다.</p>
    </div>
  );
};

// --- Footer Demo ---
export const FooterDemo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-slate-100 rounded-xl border border-dashed border-slate-300">
      <div className="w-full max-w-md bg-slate-50 border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-48">
         {/* Placeholder Content */}
         <div className="flex-1 p-4 flex items-center justify-center text-xs text-slate-400">
          ... 페이지의 끝 ...
        </div>

        {/* The Footer Area */}
        <footer className="bg-slate-900 text-slate-400 p-4 text-xs">
          <div className="grid grid-cols-2 gap-4 mb-3">
            <div>
              <div className="text-white font-bold mb-1">Company</div>
              <div className="space-y-1 text-[10px]">
                <div>소개</div>
                <div>채용</div>
              </div>
            </div>
            <div>
              <div className="text-white font-bold mb-1">Legal</div>
              <div className="space-y-1 text-[10px]">
                <div>이용약관</div>
                <div>개인정보처리방침</div>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-2 text-[10px] text-center">
            © 2024 UI Lexicon Inc.
          </div>
        </footer>
      </div>
    </div>
  );
};

// --- Sidebar Demo ---
export const SidebarDemo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-slate-100 rounded-xl border border-dashed border-slate-300">
      <div className="w-full max-w-md bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex h-48">
        {/* The Sidebar Area */}
        <aside className="w-1/3 bg-slate-50 border-r border-slate-200 p-3 flex flex-col gap-2">
          <div className="text-xs font-bold text-slate-400 mb-1 uppercase">Menu</div>
          <div className="h-6 bg-primary-100 text-primary-700 rounded px-2 flex items-center text-xs font-medium">Dashboard</div>
          <div className="h-6 hover:bg-slate-100 text-slate-600 rounded px-2 flex items-center text-xs">Analytics</div>
          <div className="h-6 hover:bg-slate-100 text-slate-600 rounded px-2 flex items-center text-xs">Users</div>
          <div className="h-6 hover:bg-slate-100 text-slate-600 rounded px-2 flex items-center text-xs">Settings</div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4">
           <div className="h-4 w-1/3 bg-slate-200 rounded mb-4"></div>
           <div className="space-y-2">
             <div className="h-2 w-full bg-slate-100 rounded"></div>
             <div className="h-2 w-5/6 bg-slate-100 rounded"></div>
             <div className="h-2 w-4/6 bg-slate-100 rounded"></div>
           </div>
        </main>
      </div>
      <p className="mt-3 text-xs text-slate-500">사이드바는 메인 콘텐츠 옆에서 <br/>보조 메뉴 역할을 합니다.</p>
    </div>
  );
};

// --- Hero Demo ---
export const HeroDemo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-slate-100 rounded-xl border border-dashed border-slate-300">
      <div className="w-full max-w-md bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm">
        {/* Navbar placeholder */}
        <div className="h-10 border-b flex items-center px-4 justify-between bg-white">
          <div className="w-16 h-3 bg-slate-200 rounded"></div>
          <div className="flex gap-2">
            <div className="w-8 h-3 bg-slate-200 rounded"></div>
            <div className="w-8 h-3 bg-slate-200 rounded"></div>
          </div>
        </div>

        {/* The Hero Section */}
        <section className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-8 text-center flex flex-col items-center justify-center">
          <h2 className="text-xl font-bold mb-2">Welcome to Future</h2>
          <p className="text-xs opacity-90 mb-4 max-w-[200px]">
            The best platform to learn UI/UX terms with interactive demos.
          </p>
          <button className="bg-white text-indigo-600 text-xs font-bold px-4 py-2 rounded-full shadow-lg transform hover:scale-105 transition">
            Get Started
          </button>
        </section>

        {/* Content Below */}
        <div className="p-4 flex gap-4">
          <div className="flex-1 h-12 bg-slate-50 rounded"></div>
          <div className="flex-1 h-12 bg-slate-50 rounded"></div>
          <div className="flex-1 h-12 bg-slate-50 rounded"></div>
        </div>
      </div>
    </div>
  );
};

// --- Modal Demo ---
export const ModalDemo: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-64 bg-slate-100 rounded-xl border border-dashed border-slate-300 relative">
      <button 
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition shadow-sm font-medium"
      >
        모달 열기 (Open Modal)
      </button>

      {isOpen && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/50 rounded-xl backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white p-6 rounded-lg shadow-xl w-80 max-w-full m-4 transform transition-all scale-100 animate-in zoom-in-95 duration-200">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-bold text-slate-800">삭제 확인</h3>
              <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-slate-600">
                <X size={20} />
              </button>
            </div>
            <p className="text-slate-600 mb-6 text-sm">
              정말로 이 항목을 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다. 모달은 이렇게 사용자의 주의를 집중시킵니다.
            </p>
            <div className="flex justify-end space-x-2">
              <button onClick={() => setIsOpen(false)} className="px-3 py-1.5 text-slate-600 hover:bg-slate-100 rounded-md text-sm">취소</button>
              <button onClick={() => setIsOpen(false)} className="px-3 py-1.5 bg-red-600 text-white rounded-md hover:bg-red-700 text-sm">삭제</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// --- Toast Demo ---
export const ToastDemo: React.FC = () => {
  const [toasts, setToasts] = useState<{id: number, text: string, type: 'success' | 'error' | 'info'}[]>([]);

  const addToast = (type: 'success' | 'error' | 'info') => {
    const id = Date.now();
    const text = type === 'success' ? '저장되었습니다!' : type === 'error' ? '연결 실패. 다시 시도해주세요.' : '새로운 업데이트가 있습니다.';
    setToasts(prev => [...prev, { id, text, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3000);
  };

  return (
    <div className="flex flex-col items-center justify-center h-64 bg-slate-100 rounded-xl border border-dashed border-slate-300 relative overflow-hidden">
      <div className="flex gap-2">
        <button onClick={() => addToast('success')} className="px-3 py-1.5 bg-green-600 text-white text-sm rounded hover:bg-green-700">성공 (Success)</button>
        <button onClick={() => addToast('error')} className="px-3 py-1.5 bg-red-600 text-white text-sm rounded hover:bg-red-700">에러 (Error)</button>
        <button onClick={() => addToast('info')} className="px-3 py-1.5 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">정보 (Info)</button>
      </div>

      <div className="absolute top-4 right-4 flex flex-col gap-2 w-64 pointer-events-none">
        {toasts.map(toast => (
          <div key={toast.id} className={`
            p-3 rounded-lg shadow-lg flex items-center gap-2 text-sm text-white pointer-events-auto transition-all animate-in slide-in-from-right duration-300
            ${toast.type === 'success' ? 'bg-green-500' : toast.type === 'error' ? 'bg-red-500' : 'bg-blue-500'}
          `}>
            {toast.type === 'success' && <CheckCircle size={16} />}
            {toast.type === 'error' && <AlertTriangle size={16} />}
            {toast.type === 'info' && <Bell size={16} />}
            {toast.text}
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Skeleton Demo ---
export const SkeletonDemo: React.FC = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-slate-100 rounded-xl border border-dashed border-slate-300">
      <div className="w-full max-w-sm bg-white p-4 rounded-xl shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-xs font-semibold text-slate-400 uppercase">사용자 프로필</h4>
          <button onClick={() => setLoading(!loading)} className="text-xs text-primary-600 hover:underline">
            {loading ? '콘텐츠 보기' : '스켈레톤 보기'}
          </button>
        </div>
        
        {loading ? (
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-slate-200 h-12 w-12"></div>
            <div className="flex-1 space-y-3 py-1">
              <div className="h-2 bg-slate-200 rounded w-3/4"></div>
              <div className="space-y-2">
                <div className="h-2 bg-slate-200 rounded"></div>
                <div className="h-2 bg-slate-200 rounded w-5/6"></div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex space-x-4 animate-in fade-in duration-500">
            <div className="rounded-full bg-primary-100 h-12 w-12 flex items-center justify-center text-primary-600">
              <User size={24} />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-slate-800">김철수</h3>
              <p className="text-sm text-slate-500">시니어 UX 엔지니어</p>
              <p className="text-xs text-slate-400 mt-1">5분 전 활동</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// --- Accordion Demo ---
export const AccordionDemo: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items = [
    { title: 'React란 무엇인가요?', content: 'React는 사용자 인터페이스를 만들기 위한 JavaScript 라이브러리입니다.' },
    { title: 'Tailwind CSS의 장점은?', content: 'HTML을 벗어나지 않고도 유틸리티 클래스를 사용해 빠르게 커스텀 디자인을 구축할 수 있습니다.' },
    { title: 'Accordion은 언제 쓰나요?', content: '한정된 공간에 많은 양의 정보를 담아야 할 때, 섹션별로 내용을 숨기고 보여주기 위해 사용합니다.' }
  ];

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-slate-100 rounded-xl border border-dashed border-slate-300">
      <div className="w-full max-w-sm bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
        {items.map((item, index) => (
          <div key={index} className="border-b border-slate-100 last:border-0">
            <button 
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-4 py-3 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
            >
              <span className="font-medium text-slate-700 text-sm">{item.title}</span>
              <ChevronRight 
                size={16} 
                className={`text-slate-400 transition-transform duration-200 ${openIndex === index ? 'rotate-90' : ''}`}
              />
            </button>
            <div 
              className={`
                overflow-hidden transition-all duration-300 ease-in-out bg-slate-50
                ${openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}
              `}
            >
              <p className="p-4 text-sm text-slate-600">
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Tooltip Demo ---
export const TooltipDemo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-64 bg-slate-100 rounded-xl border border-dashed border-slate-300 gap-8">
      <div className="text-slate-500 text-sm mb-4">아이콘 위에 마우스를 올려보세요</div>
      
      <div className="flex gap-8">
        <div className="group relative">
          <button className="p-3 bg-white rounded-full shadow-sm hover:shadow-md text-slate-600 hover:text-primary-600 transition">
            <Info size={24} />
          </button>
          {/* Tooltip Content */}
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            추가 정보 보기
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-800"></div>
          </div>
        </div>

        <div className="group relative">
          <button className="p-3 bg-white rounded-full shadow-sm hover:shadow-md text-slate-600 hover:text-red-600 transition">
            <Bell size={24} />
          </button>
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            알림 (2개)
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-800"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Breadcrumbs Demo ---
export const BreadcrumbsDemo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-64 bg-slate-100 rounded-xl border border-dashed border-slate-300">
      <div className="bg-white p-6 w-full max-w-md shadow-sm rounded-lg">
        <nav className="flex text-sm text-slate-500 mb-6" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <a href="#" className="inline-flex items-center hover:text-primary-600">
                <Home size={14} className="mr-2" />
                홈 (Home)
              </a>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRight size={14} className="text-slate-300" />
                <a href="#" className="ml-1 md:ml-2 hover:text-primary-600">설정 (Settings)</a>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <ChevronRight size={14} className="text-slate-300" />
                <span className="ml-1 md:ml-2 text-slate-800 font-medium">프로필 (Profile)</span>
              </div>
            </li>
          </ol>
        </nav>
        
        <h2 className="text-2xl font-bold text-slate-800">프로필 설정</h2>
        <p className="text-slate-500 mt-2">이곳에서 계정 정보를 관리할 수 있습니다.</p>
      </div>
    </div>
  );
};

// --- Segmented Control Demo ---
export const SegmentedControlDemo: React.FC = () => {
  const [view, setView] = useState<'일간' | '주간' | '월간'>('주간');

  return (
    <div className="flex flex-col items-center justify-center h-64 bg-slate-100 rounded-xl border border-dashed border-slate-300">
      <div className="bg-slate-200 p-1 rounded-lg flex space-x-1">
        {(['일간', '주간', '월간'] as const).map((v) => (
          <button
            key={v}
            onClick={() => setView(v)}
            className={`
              px-4 py-1.5 rounded-md text-sm font-medium transition-all duration-200
              ${view === v 
                ? 'bg-white text-primary-700 shadow-sm' 
                : 'text-slate-500 hover:text-slate-700 hover:bg-slate-300/50'
              }
            `}
          >
            {v}
          </button>
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-slate-500 text-sm">현재 보기 방식</p>
        <p className="text-xl font-bold text-slate-800">{view} 리포트</p>
      </div>
    </div>
  );
};

// --- Grid Demo ---
export const GridDemo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-slate-100 rounded-xl border border-dashed border-slate-300">
      <div className="bg-white p-4 rounded-lg shadow-sm w-full max-w-sm">
        <div className="flex items-center gap-2 mb-4 text-slate-500 text-sm">
          <LayoutGrid size={16} />
          <span>CSS Grid Layout (2x2)</span>
        </div>
        <div className="grid grid-cols-2 gap-3 h-48">
          <div className="bg-primary-100 text-primary-700 rounded-lg flex items-center justify-center font-bold">1</div>
          <div className="bg-primary-100 text-primary-700 rounded-lg flex items-center justify-center font-bold">2</div>
          <div className="bg-primary-500 text-white rounded-lg flex items-center justify-center font-bold col-span-2">3 (col-span-2)</div>
        </div>
      </div>
    </div>
  );
};

// --- Flexbox Demo ---
export const FlexboxDemo: React.FC = () => {
  const [justify, setJustify] = useState<'justify-start' | 'justify-center' | 'justify-between'>('justify-center');

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-slate-100 rounded-xl border border-dashed border-slate-300">
      <div className="flex gap-2 mb-4">
        <button onClick={() => setJustify('justify-start')} className={`px-2 py-1 text-xs rounded ${justify === 'justify-start' ? 'bg-primary-600 text-white' : 'bg-white text-slate-600'}`}>Start</button>
        <button onClick={() => setJustify('justify-center')} className={`px-2 py-1 text-xs rounded ${justify === 'justify-center' ? 'bg-primary-600 text-white' : 'bg-white text-slate-600'}`}>Center</button>
        <button onClick={() => setJustify('justify-between')} className={`px-2 py-1 text-xs rounded ${justify === 'justify-between' ? 'bg-primary-600 text-white' : 'bg-white text-slate-600'}`}>Between</button>
      </div>

      <div className={`w-full max-w-sm bg-white p-4 rounded-lg shadow-sm h-32 flex items-center ${justify} gap-2`}>
        <div className="w-12 h-12 bg-indigo-500 rounded-lg shadow-sm flex items-center justify-center text-white font-bold">A</div>
        <div className="w-12 h-12 bg-pink-500 rounded-lg shadow-sm flex items-center justify-center text-white font-bold">B</div>
        <div className="w-12 h-12 bg-emerald-500 rounded-lg shadow-sm flex items-center justify-center text-white font-bold">C</div>
      </div>
    </div>
  );
};

// --- Container Demo ---
export const ContainerDemo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-slate-200 rounded-xl border border-dashed border-slate-300 w-full">
      <div className="w-full text-center text-xs text-slate-500 mb-2">회색 영역: 뷰포트 / 흰색 영역: 컨테이너</div>
      <div className="w-full max-w-xs mx-auto bg-white p-4 rounded shadow-md text-center">
        <Box size={24} className="mx-auto text-primary-500 mb-2" />
        <p className="text-sm text-slate-700 font-medium">나는 중앙에 위치한 컨테이너입니다.</p>
        <p className="text-xs text-slate-400 mt-1">max-width: xs</p>
      </div>
    </div>
  );
};

// --- Card Demo ---
export const CardDemo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-slate-100 rounded-xl border border-dashed border-slate-300">
      <div className="w-64 bg-white rounded-xl shadow-md overflow-hidden border border-slate-100 hover:shadow-lg transition-shadow">
        <div className="h-32 bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center">
           <CreditCard className="text-white/80" size={48} />
        </div>
        <div className="p-4">
          <div className="uppercase tracking-wide text-xs text-indigo-500 font-semibold">Article</div>
          <h3 className="block mt-1 text-lg leading-tight font-medium text-black">UI 디자인의 기초</h3>
          <p className="mt-2 text-slate-500 text-sm">카드는 관련된 정보를 하나의 컨테이너에 깔끔하게 담아냅니다.</p>
          <div className="mt-4">
            <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">더 읽어보기 &rarr;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Text Field Demo ---
export const TextFieldDemo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-slate-100 rounded-xl border border-dashed border-slate-300">
      <div className="w-full max-w-xs bg-white p-6 rounded-lg shadow-sm space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">이메일 주소</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <Search size={16} />
            </div>
            <input 
              type="text" 
              className="block w-full pl-10 pr-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 sm:text-sm" 
              placeholder="example@domain.com" 
            />
          </div>
          <p className="mt-1 text-xs text-slate-500">주로 사용하는 이메일을 입력하세요.</p>
        </div>
      </div>
    </div>
  );
};

// --- Checkbox Demo ---
export const CheckboxDemo: React.FC = () => {
  const [checkedItems, setCheckedItems] = useState({
    marketing: false,
    updates: true,
  });

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-slate-100 rounded-xl border border-dashed border-slate-300">
      <div className="w-full max-w-xs bg-white p-6 rounded-lg shadow-sm space-y-4">
        <h4 className="text-sm font-medium text-slate-900">알림 설정 (다중 선택 가능)</h4>
        <div className="space-y-3">
          <label className="flex items-start">
            <input 
              type="checkbox" 
              checked={checkedItems.marketing}
              onChange={(e) => setCheckedItems({...checkedItems, marketing: e.target.checked})}
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-slate-300 rounded mt-0.5" 
            />
            <span className="ml-3 text-sm text-slate-700">마케팅 이메일 수신 동의</span>
          </label>
          <label className="flex items-start">
            <input 
              type="checkbox" 
              checked={checkedItems.updates}
              onChange={(e) => setCheckedItems({...checkedItems, updates: e.target.checked})}
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-slate-300 rounded mt-0.5" 
            />
            <span className="ml-3 text-sm text-slate-700">제품 업데이트 소식 받기</span>
          </label>
        </div>
      </div>
    </div>
  );
};

// --- Radio Demo ---
export const RadioDemo: React.FC = () => {
  const [selected, setSelected] = useState('standard');

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-slate-100 rounded-xl border border-dashed border-slate-300">
      <div className="w-full max-w-xs bg-white p-6 rounded-lg shadow-sm space-y-4">
        <h4 className="text-sm font-medium text-slate-900">배송 옵션 (하나만 선택)</h4>
        <div className="space-y-2">
          {['standard', 'express', 'overnight'].map((option) => (
            <label key={option} className={`
              flex items-center p-3 border rounded-lg cursor-pointer transition-all
              ${selected === option ? 'border-primary-500 bg-primary-50' : 'border-slate-200 hover:bg-slate-50'}
            `}>
              <input 
                type="radio" 
                name="shipping"
                value={option}
                checked={selected === option}
                onChange={(e) => setSelected(e.target.value)}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-slate-300"
              />
              <span className="ml-3 text-sm font-medium text-slate-700 capitalize">
                {option === 'standard' && '일반 배송 (무료)'}
                {option === 'express' && '특급 배송 (+3000원)'}
                {option === 'overnight' && '새벽 배송 (+5000원)'}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- Toggle Demo ---
export const ToggleDemo: React.FC = () => {
  const [isOn, setIsOn] = useState(true);

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-slate-100 rounded-xl border border-dashed border-slate-300">
      <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-between w-64">
        <span className="text-sm font-medium text-slate-700">비행기 모드</span>
        <button 
          onClick={() => setIsOn(!isOn)}
          className={`
            relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
            ${isOn ? 'bg-primary-600' : 'bg-slate-200'}
          `}
        >
          <span 
            className={`
              pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out
              ${isOn ? 'translate-x-5' : 'translate-x-0'}
            `}
          />
        </button>
      </div>
    </div>
  );
};

// --- Dropdown Demo ---
export const DropdownDemo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-slate-100 rounded-xl border border-dashed border-slate-300 min-h-[250px]">
      <div className="w-full max-w-xs bg-white p-6 rounded-lg shadow-sm space-y-2">
        <label className="block text-sm font-medium text-slate-700">과일 선택</label>
        <div className="relative">
          <select className="block w-full pl-3 pr-10 py-2.5 text-base border-slate-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md appearance-none bg-slate-50 border">
            <option>사과 (Apple)</option>
            <option>바나나 (Banana)</option>
            <option>오렌지 (Orange)</option>
            <option>포도 (Grape)</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
            <ChevronDown size={16} />
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Scrollbar Demo ---
export const ScrollbarDemo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-slate-100 rounded-xl border border-dashed border-slate-300">
      <div className="w-64 h-48 bg-white rounded-lg shadow-sm overflow-hidden border border-slate-200 flex flex-col">
        <div className="p-3 border-b border-slate-100 bg-slate-50 font-medium text-xs text-slate-500">
          약관 (스크롤 해보세요)
        </div>
        <div className="overflow-y-auto p-4 text-xs text-slate-600 space-y-4 custom-scrollbar h-full">
          <style>{`
            .custom-scrollbar::-webkit-scrollbar {
              width: 6px;
            }
            .custom-scrollbar::-webkit-scrollbar-track {
              background: #f1f5f9;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb {
              background: #cbd5e1;
              border-radius: 3px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb:hover {
              background: #94a3b8;
            }
          `}</style>
          <p>제 1조 (목적) <br/> 이 약관은 회사(전자상거래 사업자)가 운영하는 사이버 몰(이하 "몰"이라 한다)에서 제공하는 인터넷 관련 서비스(이하 "서비스"라 한다)를 이용함에 있어 사이버 몰과 이용자의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.</p>
          <p>제 2조 (정의) <br/> ① "몰"이란 회사가 재화 또는 용역을 이용자에게 제공하기 위하여 컴퓨터 등 정보통신설비를 이용하여 재화 등을 거래할 수 있도록 설정한 가상의 영업장을 말하며, 아울러 사이버몰을 운영하는 사업자의 의미로도 사용합니다.</p>
          <p>② "이용자"란 "몰"에 접속하여 이 약관에 따라 "몰"이 제공하는 서비스를 받는 회원 및 비회원을 말합니다.</p>
          <p>③ "회원"이라 함은 "몰"에 개인정보를 제공하여 회원등록을 한 자로서, "몰"의 정보를 지속적으로 제공받으며, "몰"이 제공하는 서비스를 계속적으로 이용할 수 있는 자를 말합니다.</p>
        </div>
      </div>
    </div>
  );
};