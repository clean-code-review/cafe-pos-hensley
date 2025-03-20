import { MenuItemType, SelectedMenuDTO } from '@/types'
import { useState } from 'react'
/**
 * 현재 선택한 메뉴의 옵션 상태 처리 훅
 * @returns
 */
export const useMenuSelection = (onFinalSelection) => {
  const [selectedMenu, setSelectedMenu] = useState<SelectedMenuDTO | null>(null)

  const handleMenuSelect = (menu: MenuItemType) => {
    if (menu.options && Object.keys(menu).length > 0) {
      setSelectedMenu(menu)
    } else {
      onFinalSelection(menu)
    }
  }

  const handleOptionConfirm = (menuWithOptions) => {
    onFinalSelection(menuWithOptions)
    setSelectedMenu(null)
  }

  const handleOptionCancel = () => {
    setSelectedMenu(null)
  }

  return {
    selectedMenu,
    handleMenuSelect,
    handleOptionConfirm,
    handleOptionCancel,
  }
}
