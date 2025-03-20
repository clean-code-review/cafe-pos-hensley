import { CartItem } from '@/PosPage/cart/CartItem'
import { useCart, UseCartReturn } from '@/shared/hooks/useCart'
import { CountControl } from '@/shared/UI/\bCountControl'
import { CartItemDTO } from '@/types'

/**
 *
 * @returns CartPanel
 */
type CartPanelProps = {
  items: CartItemDTO[]
  increaseQuantity: ReturnType<typeof useCart>['increaseQuantity']
  decreaseQuantity: ReturnType<typeof useCart>['decreaseQuantity']
  currentQuantity: ReturnType<typeof useCart>['currentQuantity']
}
export const CartPanel = ({
  items,
  increaseQuantity,
  decreaseQuantity,
  currentQuantity,
}: CartPanelProps) => {
  console.log('items', items)
  return (
    <div className={`pos-cart-panel`}>
      <h1>CartPanel</h1>
      {items.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onIncrease={() => increaseQuantity(item.id)}
          onDecrease={() => decreaseQuantity(item.id)}
          currentQuantity={currentQuantity}
        />
      ))}
    </div>
  )
}
