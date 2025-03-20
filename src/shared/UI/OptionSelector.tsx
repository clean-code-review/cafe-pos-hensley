import { MenuItemType, SelectedMenuDTO } from '@/types'
import { useOptionSelection } from '../hooks/useOptionSelection'
import { OptionItem } from './OptionItem'

type OptionSelectorProps = {
  menu: MenuItemType
  onConfirm: (selectedMenu: SelectedMenuDTO) => void
  onCancel: () => void
}
/**
 * 동적 옵션 대응
 * ex)  
 * {temperature?: MenuItemOption[] | undefined;
    size?: MenuItemOption[] | undefined;
    cup?: MenuItemOption[] | undefined;
    extras?: MenuItemOption[] | undefined;}
    인 경우,

 * @param param0 
 * @returns 
 */
export const OptionSelector = ({
  menu,
  onConfirm,
  onCancel,
}: OptionSelectorProps) => {
  const { onSelectOption, getMenuWithOptions } = useOptionSelection(menu)

  const handleConfirm = () => {
    onConfirm(getMenuWithOptions())
  }
  return (
    <div className="option-selector-modal">
      <h3>옵션 선택</h3>
      <div className="options-list">
        {Object.entries(menu.options).map(([key, value]) => (
          <OptionItem
            key={key}
            optionName={key}
            option={value}
            onSelect={onSelectOption}
          />
        ))}
      </div>
      <div className="buttons">
        <button onClick={onCancel}>취소</button>
        <button onClick={handleConfirm}>확인</button>
      </div>
    </div>
  )
}
