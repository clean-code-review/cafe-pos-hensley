import { CategoryPanelProps } from '../Pos/CategoryPanel'

type CategoryProps = {
  categories: CategoryPanelProps['categories']
  handleCategorySelect: CategoryPanelProps['onCategorySelect']
}

export const Category = ({
  categories,
  handleCategorySelect,
}: CategoryProps) => {
  return (
    <div className="pos_category_list">
      {categories.map((category) =>
        category.id && category.name ? (
          <button
            key={category.id}
            onClick={() => handleCategorySelect(category.id)}
          >
            {category.name}
          </button>
        ) : null,
      )}
    </div>
  )
}
