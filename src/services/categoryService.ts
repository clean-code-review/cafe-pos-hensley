import { menuApi } from '@/api/endpoints/menuApi'
import { CategoryDTO } from '@/types'

export const categoryService = {
  getAllCategory: async (): Promise<CategoryDTO[]> => {
    return await menuApi.getAllCategory()
  },
}
