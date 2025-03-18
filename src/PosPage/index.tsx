import { Pos } from '@/Pos'
import { CategoryPanel } from './CategoryPanel'
import { useCategory } from '@/shared/hooks/useCategory'

export const PosPage = () => {
  const { categories, onCategorySelect, selectedCategory } = useCategory()
  console.log('selectedC', selectedCategory)
  return (
    <>
      <CategoryPanel
        categories={categories ?? []}
        onCategorySelect={onCategorySelect}
      />
      <Pos.Main>
        <Pos.OrderPanel categoryName={selectedCategory} />
        <Pos.CartPanel />
      </Pos.Main>
    </>
  )
}
