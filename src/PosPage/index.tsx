import { Pos } from '@/PosPage/Pos'
import { useCart } from '@/shared/hooks/useCart'
import { useCategory } from '@/shared/hooks/useCategory'

export const PosPage = () => {
  const { categories, onCategorySelect, selectedCategory } = useCategory()
  const {
    addCartItem,
    items,
    increaseQuantity,
    decreaseQuantity,
    currentQuantity,
  } = useCart()

  return (
    <>
      <Pos.CategoryPanel
        categories={categories ?? []}
        onCategorySelect={onCategorySelect}
      />
      <Pos.Main>
        <Pos.OrderPanel
          categoryName={selectedCategory}
          onFinalSelection={addCartItem}
        />
        <Pos.CartPanel
          items={items}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          currentQuantity={currentQuantity}
        />
      </Pos.Main>
    </>
  )
}
