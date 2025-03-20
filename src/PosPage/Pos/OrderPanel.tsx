import { MenuList } from '@/PosPage/MenuList'
import { useMenusByCategory } from '@/shared/hooks/query/useMenuQueries'
import { useMenuSelection } from '@/shared/hooks/useMenuSelection'
import { OptionSelector } from '@/shared/UI/OptionSelector'
import { MenuCategories, SelectedMenuDTO } from '@/types'

export const OrderPanel = ({
  categoryName,
  onFinalSelection,
}: {
  categoryName: MenuCategories
  onFinalSelection: (menu: SelectedMenuDTO) => void
}) => {
  if (!categoryName) {
    throw '선택한 카테고리 이름이 없습니다.'
  }

  // 메뉴 선택 훅 사용
  const {
    selectedMenu,
    handleMenuSelect,
    handleOptionConfirm,
    handleOptionCancel,
  } = useMenuSelection(onFinalSelection)
  /*카테고리 이름 기반으로 menu들 가져오기  */
  const { data: menus, isError, isLoading } = useMenusByCategory(categoryName)

  if (isLoading) {
    return <div> {'메뉴 로딩 중'}</div>
  }
  if (isError) {
    return <div> {'메뉴 불러 오는 중 에러가 났습니다.'}</div>
  }
  return (
    <div className={`pos-order-panel`}>
      <MenuList menus={menus ?? []} onSelectMenu={handleMenuSelect} />
      {/* 선택한 옵션들 보여주기 */}
      {selectedMenu && (
        <OptionSelector
          menu={selectedMenu}
          onConfirm={handleOptionConfirm}
          onCancel={handleOptionCancel}
        />
      )}
    </div>
  )
}
