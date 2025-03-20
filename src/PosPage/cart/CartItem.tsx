import { useCart } from '@/shared/hooks/useCart'
import { CountControl } from '@/shared/ui/CountControl'
import { CartItemDTO } from '@/types'

type CartItemProps = {
  item: CartItemDTO
  onIncrease: ReturnType<typeof useCart>['increaseQuantity']
  onDecrease: ReturnType<typeof useCart>['decreaseQuantity']
  currentQuantity: ReturnType<typeof useCart>['currentQuantity']
}

//subtract, add button with current qty
export const CartItem = ({
  item,
  onIncrease,
  onDecrease,
  currentQuantity,
}: CartItemProps) => {
  const currentQty = currentQuantity(item.id)
  return (
    <div>
      <p>{item.id}</p>
      <p>{item.name}</p>
      <p>{item.price}</p>
      <p>{item.quantity}</p>

      <CountControl
        itemId={item.id}
        currentQuantity={currentQty ?? 1}
        decreaseQuantity={onDecrease}
        increaseQuantity={onIncrease}
      />
    </div>
  )
}
