import { Category } from './Category'
import { CategoryDTO, MenuCategories } from '@/types'
export type CategoryPanelProps = {
  categories: CategoryDTO[]
  onCategorySelect: (categoryId: MenuCategories) => void
}
export const CategoryPanel = ({
  categories,
  onCategorySelect,
}: CategoryPanelProps) => {
  return (
    <Category
      categories={categories ?? []}
      handleCategorySelect={onCategorySelect}
    />
  )
}
