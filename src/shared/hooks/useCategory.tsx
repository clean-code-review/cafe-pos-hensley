import { useState } from 'react'
import { useCategoryQueries } from './query/useCategoryQueries'
import { MenuCategories } from '@/types'

export const useCategory = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<MenuCategories>('coffee')
  const {
    data: categories,
    isLoading: isCategoryLoading,
    isError: isCategoryError,
  } = useCategoryQueries()

  const onCategorySelect = (categoryName: MenuCategories) => {
    setSelectedCategory(categoryName)
  }

  return {
    isCategoryLoading,
    isCategoryError,
    categories,
    onCategorySelect,
    selectedCategory,
  }
}
