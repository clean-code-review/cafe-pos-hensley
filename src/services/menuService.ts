import { menuApi } from '../api/endpoints/menuApi'
import { MenuItemType, MenuCategories } from '@/types'

export const menuService = {
  /**
   * 카테고리별 메뉴 가져오기
   * @param category
   * @returns
   */
  getMenusByCategory: async (
    category: MenuCategories,
  ): Promise<MenuItemType[]> => {
    const menus = await menuApi.getMenusByCategory(category)
    // 비즈니스 로직
    return menus.filter((menu) => menu.available !== false)
  },

  // 메뉴 상세 정보 (옵션 처리 로직 포함)
  getMenuWithOptions: async (id: string): Promise<MenuItemType> => {
    const menu = await menuApi.getMenuById(id)

    // null/undefined 안전 처리
    if (!menu.options) {
      menu.options = {}
    }

    // 필요한 비즈니스 로직 (예: 기본 옵션 설정)
    return menu
  },
}
