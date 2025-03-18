import { apiRequest } from '@/api/client'
import { CategoryDTO, MenuCategories, MenuItem } from '@/types'

export const menuApi = {
  // 모든 메뉴 가져오기
  getAllMenus: () =>
    apiRequest<MenuItem[]>({
      method: 'GET',
      url: '/menu',
    }),

  // 카테고리별 메뉴 가져오기
  getMenusByCategory: (category: MenuCategories) =>
    apiRequest<MenuItem[]>({
      method: 'GET',
      url: `/menu/category/${category}`,
    }),

  // 메뉴 상세 정보 가져오기
  getMenuById: (id: string) =>
    apiRequest<MenuItem>({
      method: 'GET',
      url: `/menu/${id}`,
    }),
  // 카테고리 가져오기
  getAllCategory: () =>
    apiRequest<CategoryDTO[]>({
      method: 'GET',
      url: `/category`,
    }),
}
