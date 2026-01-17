import { UITerm } from "../types";

// AI 기능을 비활성화했으므로 API 키나 외부 라이브러리 없이 더미 응답만 반환합니다.
export const generateAIResponse = async (
  prompt: string, 
  contextTerm: UITerm,
  history: {role: string, text: string}[] = []
): Promise<string> => {
  return "AI 기능이 비활성화되었습니다.";
};