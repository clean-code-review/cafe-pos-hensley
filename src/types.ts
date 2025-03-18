export const MenuCategory = {
  coffee: 'Coffee',
  smoothie: 'smoothie',
  tea: 'Tea',
  bakery: 'Bakery',
} as const

export interface CategoryDTO {
  id: MenuCategories
  name: string
}

export type MenuCategories = keyof typeof MenuCategory
export type MenuOption = {
  id: string
  name: string
  price: number
  options: MenuItemOption[]
}

export type CupType = 'disposable' | 'mug' | 'personal'
export type SizeType = 'regular' | 'large' | 'max'
export type TemperatureType = 'hot' | 'ice'

export const OPTION_CATEGORY = {
  TEMPERATURE: 'temperature',
  SIZE: 'size',
  CUP: 'cup',
  ETC: 'etc',
} as const

// 옵션 카테고리 타입
export type OptionCategory = 'temperature' | 'size' | 'cup' | 'etc'

export type MenuItemOption = {
  name: string
  price: number | null // null 가격 (무료 옵션)
  category: (typeof OPTION_CATEGORY)[keyof typeof OPTION_CATEGORY]
}

export interface TemperatureOption extends MenuItemOption {
  category: typeof OPTION_CATEGORY.TEMPERATURE
  value: TemperatureType
}

export interface SizeOption extends MenuItemOption {
  category: typeof OPTION_CATEGORY.TEMPERATURE
  value: SizeType
}

export interface CupOption extends MenuItemOption {
  category: typeof OPTION_CATEGORY.CUP
  value: CupType
}
// 기타 옵션 (샷 추가, 시럽 추가 등)
export interface ExtraOption extends MenuItemOption {
  category: typeof OPTION_CATEGORY.ETC
  value?: string
}

//메뉴마다 다른 옵션들, 어떻게 할것인가?

// 카테고리 이름 표시용 함수
export const getCategoryDisplayName = (
  category: keyof typeof MenuCategory,
): string => {
  switch (category) {
    case 'coffee':
      return '커피'
    case 'smoothie':
      return '스무디'
    case 'tea':
      return '차'
    case 'bakery':
      return '베이커리'
    default: {
      // TypeScript의 타입 안전성 확보를 위한 exhaustive check
      const exhaustiveCheck: never = category
      return exhaustiveCheck
    }
  }
}

export interface MenuItem {
  id: string
  name: string
  price: number
  description?: string
  image?: string
  available: boolean
}
