import { Pos } from '@/Pos'
import { useCategory } from '@/shared/hooks/useCategory'

export const PosPage = () => {
  const { categories, onCategorySelect, selectedCategory } = useCategory()
  return (
    <>
      <Pos.CategoryPanel
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
