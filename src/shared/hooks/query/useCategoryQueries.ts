import { categoryService } from '@/services/categoryService'
import { CategoryDTO } from '@/types'
import { useQuery } from '@tanstack/react-query'

export const CATEGORY_QUERY_KEYS = {
  all: ['all'] as const,
}

// 모든 카테고리 가져오기 훅
export const useCategoryQueries = () => {
  return useQuery<CategoryDTO[], Error>({
    queryKey: CATEGORY_QUERY_KEYS.all,
    queryFn: () => categoryService.getAllCategory(),
  })
}
