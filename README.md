# Cafe Pos Application

# POS 주문 시스템 과제

## 프로젝트 개요

이 프로젝트는 카페나 음식점에서 사용할 수 있는 POS(Point of Sale) 주문 시스템의 프론트엔드 구현입니다. 사용자는 메뉴를 선택하고, 다양한 옵션을 지정한 후 장바구니에 추가하여 주문할 수 있습니다.

## 주요 기능

- 카테고리별 메뉴 표시 및 선택
- 메뉴 옵션 선택 (온도, 사이즈, 컵 종류, 추가 옵션 등)
- 장바구니 아이템 관리 (추가, 수량 조절, 삭제)
- 동일 메뉴/다른 옵션 처리 로직
- 주문 확인 및 결제 프로세스

## 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 테스트 실행
npm test

# 빌드
npm run build
```

## 기술 스택

- **프레임워크**: React + TypeScript
- **상태 관리**: Custom Hooks 단방향
- **API 통신**: Axios + React Query
- **API 모킹**: MSW (Mock Service Worker)

## 프로젝트 구조

```
src/
├── api/                # API 클라이언트 및 엔드포인트
├── shared/
│   ├── hooks/          # 커스텀 훅
│   ├── ui/             # 재사용 가능한 UI 컴포넌트
│   └── utils/          # 유틸리티 함수
├── hooks/
├── mocks/               # MSW 모킹 설정
├── PosPage/             # 페이지 컴포넌트
├── services/            # 비즈니스 로직 서비스
├── types/               # TypeScript 타입 정의
└── utils/               # 유틸리티 함수
```

## 주요 구현 내용

### 1. Compound Components 패턴

POS UI를 구성하는 컴포넌트들은 Compound Components 패턴을 사용하여 선언적이고 가독성 높은 방식으로 구현되었습니다.

```tsx
// 사용 예시
  <Pos.CategoryPanel
        categories={categories ?? []}
        onCategorySelect={onCategorySelect}
      />
      <Pos.Main>
        <Pos.OrderPanel
          categoryName={selectedCategory}
          onFinalSelection={addCartItem}
        />
        <Pos.CartPanel
          items={items}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          currentQuantity={currentQuantity}
        />
      </Pos.Main>
```

### 2. 장바구니 로직

같은 메뉴라도 옵션이 다르면 별도의 항목으로 추가되고, 동일한 메뉴와 옵션의 경우 수량만 증가하는 로직이 구현되어 있습니다.

```typescript
// 옵션이 정확히 일치하는지 확인하는 헬퍼 함수
const areOptionsEqual = (options1, options2) => {
  const keys1 = Object.keys(options1)
  const keys2 = Object.keys(options2)

  if (keys1.length !== keys2.length) return false

  return keys1.every((key) => options1[key] === options2[key])
}

// 동일한 메뉴+옵션 아이템을 찾는 헬퍼 함수
const findExactMatchItem = (items, targetItem) => {
  return items.find(
    (item) =>
      item.name === targetItem.name &&
      areOptionsEqual(item.options, targetItem.options),
  )
}

// 장바구니 업데이트 함수
const updateCartItems = (prevItems, newItem) => {
  const exactMatch = findExactMatchItem(prevItems, newItem)

  if (exactMatch) {
    return prevItems.map((item) =>
      item === exactMatch ? { ...item, quantity: item.quantity + 1 } : item,
    )
  }

  return [...prevItems, { ...newItem, quantity: 1 }]
}
```

### 3. 상태 관리

주문 시스템의 상태 관리는 커스텀 훅을 통해 구현되었습니다. 장바구니, 카테고리, 메뉴 선택 등 각 영역별로 관심사를 분리하여 관리합니다.

```typescript
// 장바구니 상태 관리 훅
export const useCart = (): UseCartReturn => {
  const [items, setItems] = useState<CartItemDTO[]>([])

  const increaseQuantity = (id: string | number) => {
    setItems((prevItems) => {
      return prevItems.map((item) => {
        return item.id == id ? { ...item, quantity: item.quantity + 1 } : item
      })
    })
  }

  // 기타 장바구니 관련 함수들...

  return {
    items,
    increaseQuantity,
    decreaseQuantity,
    currentQuantity,
    removeItem,
    addCartItem,
  }
}
```
