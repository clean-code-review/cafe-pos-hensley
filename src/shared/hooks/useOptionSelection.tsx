import { FixedOptionGroupName, MenuItemOption, MenuItemType } from '@/types'
import { useState } from 'react'

// 옵션 선택 관련 커스텀 훅
/**
 *
 * @param menu 현재 선택한 메뉴의
 * @returns
 */
export const useOptionSelection = (menu: MenuItemType) => {
  const [selectedOptions, setSelectedOptions] =
    useState<Partial<Record<FixedOptionGroupName, MenuItemOption>>>()
  /**
   *
   * 같은 option내에서 타입을 변경할 경우 택 1로 구현
   */
  const onSelectOption = (optionName, option) => {
    setSelectedOptions((prev) => {
      return { ...prev, [optionName]: option }
    })
  }

  const getMenuWithOptions = () => {
    return {
      id: new Date().getTime().toString(),
      name: menu.name,
      price: menu.price,
      selectedOptions,
      quantity: 0,
    }
  }

  return {
    selectedOptions,
    onSelectOption,
    getMenuWithOptions,
  }
}
