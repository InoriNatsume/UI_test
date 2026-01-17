import React from 'react';

export enum TermCategory {
  NAVIGATION = '네비게이션 (Navigation)',
  FEEDBACK = '피드백 (Feedback)',
  INPUT = '입력 (Input)',
  LAYOUT = '레이아웃 (Layout)',
  DISPLAY = '데이터 표시 (Data Display)',
  STYLE = '스타일 & 디자인 (Style & Design)'
}

export interface UITerm {
  id: string;
  name: string;
  category: TermCategory;
  shortDescription: string;
  fullDescription: string;
  bestPractices: string[];
  componentKey: string;
  codeSnippet: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isLoading?: boolean;
}

// New Types for the Scene-based architecture
export enum SceneType {
  DASHBOARD = '관리자 대시보드 (Dashboard)',
  FORM = '설정 및 입력 폼 (Settings Form)',
  LANDING = '제품 랜딩 페이지 (Landing Page)',
  GALLERY = '이미지 갤러리 (Image Gallery)',
  ANIMATION = '물리 애니메이션 (Physics & Motion)',
  DESIGN = '디자인 시스템 (Design System)',
  LAYOUT_LAB = '레이아웃 구조 (Layout Lab)',
  DOCS = '개발 문서 (Documentation)'
}

export interface UIScene {
  id: SceneType;
  name: string;
  description: string;
  component: React.FC<{ onTermSelect: (termId: string) => void, activeTermId: string | null }>;
}