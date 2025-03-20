// src/mocks/handlers/menuHandlers.ts
import { http, HttpResponse, delay } from 'msw'
import { allMenuItems as mockMenuData } from '@/mocks/mockdata'

export const menuHandlers = [
  // 모든 메뉴 가져오기
  http.get('/api/menu', async () => {
    // 선택적으로 지연 추가 (로딩 상태 테스트용)
    await delay(500)

    return HttpResponse.json(mockMenuData)
  }),

  // 카테고리별 메뉴 가져오기
  http.get('/api/menu/category/:category', ({ params }) => {
    const { category } = params
    const filteredMenus = mockMenuData.filter(
      (menu) => menu.category === category,
    )

    return HttpResponse.json(filteredMenus)
  }),

  // 메뉴 상세 정보 가져오기
  http.get('/api/menu/:id', ({ params }) => {
    const { id } = params
    const menu = mockMenuData.find((m) => m.id === id)

    if (!menu) {
      return new HttpResponse(
        JSON.stringify({ message: '메뉴를 찾을 수 없습니다.' }),
        { status: 404 },
      )
    }

    return HttpResponse.json(menu)
  }),
]
