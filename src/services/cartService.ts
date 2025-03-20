import { CartItemDTO } from '@/types'
export const cartService = {
  // 모든 메뉴 가져오기 (추가 로직 포함)
  // 장바구니 업데이트 함수
  addCartItem: (prevItems: CartItemDTO[], newItem: CartItemDTO) => {
    const exactMatch = cartService.findExactMatchItem(prevItems, newItem)

    if (exactMatch) {
      // 일치하는 아이템이 있으면 수량만 증가
      return prevItems.map((item) =>
        item === exactMatch ? { ...item, quantity: item.quantity + 1 } : item,
      )
    }

    // 일치하는 아이템이 없으면 새 아이템 추가
    return [...prevItems, { ...newItem, quantity: 1 }]
  },

  // 동일한 메뉴+옵션 아이템을 찾는 헬퍼 함수
  findExactMatchItem: (items: CartItemDTO[], targetItem: CartItemDTO) => {
    return items.find(
      (item) =>
        item.name === targetItem.name &&
        cartService.areOptionsEqual(item.options, targetItem.options),
    )
  },

  // 옵션이 정확히 일치하는지 확인하는 헬퍼 함수
  areOptionsEqual: <T extends Record<string, unknown>[]>(
    options1: T,
    options2: T,
  ): boolean => {
    const firstOptionKeys = Object.keys(options1)
    const secondOptionKeys = Object.keys(options2)

    if (firstOptionKeys.length !== secondOptionKeys.length) return false
    return firstOptionKeys.every((key) => options1[key] === options2[key])
  },
}
