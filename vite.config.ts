import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages 배포 경로 설정
  // 리포지토리 이름(UI_test)과 대소문자까지 정확히 일치해야 합니다.
  base: '/UI_test/', 
})