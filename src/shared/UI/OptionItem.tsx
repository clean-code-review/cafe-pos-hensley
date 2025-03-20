import { FixedOptionGroupName, MenuItemOption } from '@/types'

type OptionItemProps = {
  option: MenuItemOption[]
  optionName: FixedOptionGroupName
  onSelect: (optionName: FixedOptionGroupName, option: MenuItemOption) => void
}
/**
 * 요구 사항 :
 * 하나의 대제목 옵션 내부에 분리된 내부 property들은 라디오 버튼처럼 택 중 1 이어야 한다.
 * @param param0
 * @returns
 */
export const OptionItem = ({
  option,
  optionName,
  onSelect,
}: OptionItemProps) => {
  const isValidOption = (property) =>
    Object.keys(property).every((prop) => prop === 'price' || property[prop])

  return (
    <div>
      <p>{optionName} 옵션 선택하기</p>

      {(option || []).map(
        (property) =>
          isValidOption(property) && (
            <button
              key={property.id}
              onClick={() => onSelect(optionName, property)}
            >
              {property.name} / {property.price ?? 0}
            </button>
          ),
      )}
    </div>
  )
}
