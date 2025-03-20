import { MenuItemType } from '@/types'

type MenuItemProps = MenuItemType & {
  onSelectMenu: () => void
}

export const MenuItem = ({ id, name, price, onSelectMenu }: MenuItemProps) => {
  return (
    <button onClick={onSelectMenu}>
      <p>{name}</p>
      <p>{price}</p>
    </button>
  )
}
