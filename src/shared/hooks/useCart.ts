import { useState } from 'react'

/**
 * useCart의 역할
 * 아이템 수량 +
 * 아이템 수량 -
 * 아이템 삭제
 * 현재 아이템들 보여주기
 * @returns
 */

export const useCart = () => {
  const [items, setItems] = useState<{ id: string; quantity: number }[]>([])

  /**
   * 아이템 수량 증가
   * @param id
   */
  const increaseQuantity = (id: string) => {
    /* 같은 아이템이 있을 경우, quantity만증가 */
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    )
  }

  /**
   * 아이템 수량 감소
   * @param id
   */
  const decreaseQuantity = (id: string) => {
    /* 같은 아이템이 있을 경우, quantity감소, 최소값 0 */
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
          : item,
      ),
    )
  }

  /**
   * 아이템 삭제
   * @param id
   */
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

  return {
    items,
    increaseQuantity,
    decreaseQuantity,
    currentQuantity,
    removeItem,
  }
}
