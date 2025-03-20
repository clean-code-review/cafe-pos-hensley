import { MenuItemType } from '@/types'
import { MenuItem } from './MenuItem'

type MenuListProps = {
  menus: MenuItemType[]
  onSelectMenu: (menu: MenuItemType) => void
}

export const MenuList = ({ menus, onSelectMenu }: MenuListProps) => {
  return (
    <div>
      {menus.map((menu) => (
        <MenuItem
          key={menu.id}
          {...menu}
          onSelectMenu={() => onSelectMenu(menu)}
        />
      ))}
    </div>
  )
}
