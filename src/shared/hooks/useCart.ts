import { cartService } from '@/services/cartService'
import { CartItemDTO } from '@/types'
import { useState } from 'react'

// useCart 훅 반환 타입도 명시적으로 정의
export interface UseCartReturn {
  items: CartItemDTO[]
  increaseQuantity: (id: string | number) => void
  decreaseQuantity: (id: string | number) => void
  currentQuantity: (id: string) => number | undefined
  removeItem: (id: string) => void
  addCartItem: (item: CartItemDTO) => void
}

/**
 * useCart의 역할
 * 아이템 수량 +
 * 아이템 수량 -
 * 아이템 삭제
 * 현재 아이템들 보여주기
 * @returns
 */

export const useCart = () => {
  const [items, setItems] = useState<CartItemDTO[]>([])
  console.log('useCart triggreed', items)

  /**
   * 아이템 수량 증가
   * @param id
   */

  const increaseQuantity = (id: string | number) => {
    console.log('increasing', items)

    /* 같은 아이템이 있을 경우, quantity만증가 */
    setItems((prevItems) => {
      const result = prevItems.map((item) => {
        return item.id == id ? { ...item, quantity: item.quantity + 1 } : item
      })

      return result
    })
  }

  /**
   * 아이템 수량 감소
   * @param id
   */
  const decreaseQuantity = (id: string | number) => {
    /* 같은 아이템이 있을 경우, quantity감소, 최소값 0 */
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
          : item,
      ),
    )
  }

  const removeItem = (id: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }

  /**
   * 현재 아이템의 수량
   * @param id
   * @returns
   */
  const currentQuantity = (id: string) => {
    return items.find((item) => item.id === id)?.quantity
  }

  /**
   * 장바구니 추가시 고려해야 할 사항
   * 상품의 이름이 같더라도, 선택된 옵션이 다르다면 다른 상품으로 새로 장바구니에 추가
   * 현재 선택된 음료와 옵션이 모두 맞는 기존 장바구니 아이템을 찾았다면,
   * 수량만 추가.
   *
   * 로직:
   * 1. 음료 이름 or id검사
   * 2. 선택된 모든 옵션 비교 (나열된 모든 옵션들에서 하나라도 다르면 false를 return)
   * 3. false가 리턴되었다면 장바구니 아이템에 새로 추가
   *
   * @param id
   */

  const addCartItem = (item: CartItemDTO) => {
    console.log('addCartItem hook', item)
    setItems((prevItems) => {
      const result = cartService.addCartItem(prevItems, item)
      console.log('Reuslt', result)
      return result
    })
  }
  return {
    items,
    increaseQuantity,
    decreaseQuantity,
    currentQuantity,
    removeItem,
    addCartItem,
  }
}
