// src/mocks/browser.ts - 브라우저 환경용
import { setupWorker } from 'msw/browser'
import { handlers } from '@/mocks/handlers'

export const worker = setupWorker(...handlers)
