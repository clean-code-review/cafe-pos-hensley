import { MenuList } from '@/PosPage/MenuList'
import { useMenusByCategory } from '@/shared/hooks/query/useMenuQueries'
import { MenuCategories } from '@/types'

export const OrderPanel = ({
  categoryName,
}: {
  categoryName: MenuCategories
}) => {
  if (!categoryName) {
    throw '선택한 카테고리 이름이 없습니다.'
  }
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
      <MenuList menus={menus ?? []} />
    </div>
  )
}
