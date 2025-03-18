import { MenuItemType } from '@/types'

type MenuItemProps = MenuItemType & {
  onSelectMenu: (id: MenuItemType['id']) => void
}

export const MenuItem = ({ id, name, price, onSelectMenu }: MenuItemProps) => {
  return (
    <button onClick={() => onSelectMenu(id)}>
      <p>{name}</p>
      <p>{price}</p>
    </button>
  )
}
