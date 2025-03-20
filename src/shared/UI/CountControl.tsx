interface CountControlProps {
  itemId: string | number
  increaseQuantity: (itemId: string | number) => void
  decreaseQuantity: (itemId: string | number) => void
  currentQuantity: number
}

export const CountControl = ({
  itemId,
  increaseQuantity,
  decreaseQuantity,
  currentQuantity,
}: CountControlProps) => {
// if (!itemId) return null
  console.log('control panel', itemId)
  return (
    <div className="count-control">
      <p> countcontrol</p>
      <button onClick={() => decreaseQuantity(itemId)}>-</button>
      <p>{currentQuantity}</p>
      <button onClick={() => increaseQuantity(itemId)}>+</button>
    </div>
  )
}
