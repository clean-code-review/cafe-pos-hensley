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
  return (
    <div className="count-control">
      <button onClick={() => decreaseQuantity(itemId)}>-</button>
      <p>{currentQuantity}</p>
      <button onClick={() => increaseQuantity(itemId)}>+</button>
    </div>
  )
}
