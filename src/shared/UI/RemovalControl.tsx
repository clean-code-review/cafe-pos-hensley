type RemovalControlProps = {
  onRemove: (itemId: string) => void
  itemId: string
}
export const RemovalControl = ({ onRemove, itemId }: RemovalControlProps) => {
  return (
    <div className="remove-control">
      <button onClick={() => onRemove(itemId)}>삭제</button>
    </div>
  )
}
