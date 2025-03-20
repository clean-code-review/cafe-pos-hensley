import { delay, http, HttpResponse } from 'msw'
import { categories } from '../mockdata'

export const categoryHandlers = [
  http.get('/api/category', async () => {
    // 선택적으로 지연 추가 (로딩 상태 테스트용)
    await delay(500)
    return HttpResponse.json(categories)
  }),
]
