import { MenuCategories } from '@/types'
import { useQuery } from '@tanstack/react-query'
import { menuService } from '@/services/menuService'

// 쿼리 키 상수
export const MENU_QUERY_KEYS = {
  all: ['menus'] as const,
  lists: () => [...MENU_QUERY_KEYS.all, 'list'] as const,
  list: (filters: string) => [...MENU_QUERY_KEYS.lists(), { filters }] as const,
  details: () => [...MENU_QUERY_KEYS.all, 'detail'] as const,
  detail: (id: string) => [...MENU_QUERY_KEYS.details(), id] as const,
}

// 카테고리별 메뉴 가져오기 훅
export const useMenusByCategory = (category: MenuCategories) => {
  return useQuery({
    queryKey: MENU_QUERY_KEYS.list(category),
    queryFn: () => menuService.getMenusByCategory(category),
    enabled: !!category,
  })
}

// 메뉴 상세 정보 가져오기 훅
export const useMenuDetail = (id: string) => {
  return useQuery({
    queryKey: MENU_QUERY_KEYS.detail(id),
    queryFn: () => menuService.getMenuWithOptions(id),
    enabled: !!id,
  })
}
