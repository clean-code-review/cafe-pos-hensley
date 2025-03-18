import { MenuItemType } from '@/types'
import { MenuItem } from './MenuItem'

type MenuListProps = {
  menus: MenuItemType[]
}

export const MenuList = ({ menus }: MenuListProps) => {
  const handleSelectMenu = () => {}
  return (
    <div>
      {menus.map((menu) => (
        <MenuItem key={menu.id} {...menu} onSelectMenu={handleSelectMenu} />
      ))}
    </div>
  )
}
