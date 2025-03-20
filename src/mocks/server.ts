// src/mocks/server.ts
import { setupServer } from 'msw/node'
import { handlers } from './handlers/menuHandlers'

export const server = setupServer(...handlers)
