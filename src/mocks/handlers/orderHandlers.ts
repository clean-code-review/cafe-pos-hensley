// src/mocks/handlers/orderHandlers.ts
import { http, HttpResponse } from 'msw'

export const orderHandlers = [
  // 주문 제출
  http.post('/api/orders', async ({ request }) => {
    const orderData = await request.json()

    // 모의 유효성 검사
    if (!orderData.items || orderData.items.length === 0) {
      return new HttpResponse(
        JSON.stringify({
          message: '주문 항목이 필요합니다.',
          code: 'INVALID_ORDER',
          errors: {
            items: ['주문 항목은 비어 있을 수 없습니다.'],
          },
        }),
        { status: 400 },
      )
    }

    // 성공 응답
    return HttpResponse.json(
      {
        id: `order-${Date.now()}`,
        ...orderData,
        status: 'pending',
        createdAt: new Date().toISOString(),
      },
      { status: 201 },
    )
  }),

  // 주문 상태 확인
  http.get('/api/orders/:id', ({ params }) => {
    const { id } = params

    return HttpResponse.json({
      id,
      status: 'pending',
      updatedAt: new Date().toISOString(),
    })
  }),
]
