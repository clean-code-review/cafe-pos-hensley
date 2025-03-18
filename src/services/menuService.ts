import { menuApi } from '../api/endpoints/menuApi'
import { MenuItem, MenuCategories } from '@/types'

export const menuService = {
  // 모든 메뉴 가져오기 (추가 로직 포함)
  getAllMenus: async (): Promise<MenuItem[]> => {
    const menus = await menuApi.getAllMenus()
    // 비즈니스 로직 (예: 품절 상품 필터링, 데이터 변환 등)
    return menus.filter((menu) => menu.available !== false)
  },

  // 카테고리별 메뉴 가져오기
  getMenusByCategory: async (category: MenuCategories): Promise<MenuItem[]> => {
    const menus = await menuApi.getMenusByCategory(category)
    // 비즈니스 로직
    return menus.filter((menu) => menu.available !== false)
  },

  // 메뉴 상세 정보 (옵션 처리 로직 포함)
  getMenuWithOptions: async (id: string): Promise<MenuItem> => {
    const menu = await menuApi.getMenuById(id)

    // null/undefined 안전 처리
    if (!menu.options) {
      menu.options = {}
    }

    // 필요한 비즈니스 로직 (예: 기본 옵션 설정)
    return menu
  },
}
