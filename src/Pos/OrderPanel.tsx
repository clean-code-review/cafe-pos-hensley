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

  return <div className={`pos-order-panel`}></div>
}
