// menu-mock-data.ts

// 커피 메뉴 아이템 (3개)
export const coffeeItems = [
  {
    id: 'coffee-americano',
    name: '아메리카노',
    price: 4500,
    description:
      '깊고 진한 에스프레소에 물을 더한 클래식 커피',
    category: 'coffee',
    options: {
      temperature: [
        { id: 'temp-hot', name: '핫', price: null }, // 명시적 null
        { id: 'temp-ice', name: '아이스', price: 500 },
      ],
      size: [
        { id: 'size-regular', name: '레귤러', price: 0 }, // 0과 null 구분
        { id: 'size-large', name: '라지', price: 1000 },
        { id: 'size-max', name: '맥스', price: 1500 },
      ],
      cup: [
        {
          id: 'cup-disposable',
          name: '일회용컵',
          price: null,
        },
        { id: 'cup-mug', name: '머그컵', price: null },
        { id: 'cup-personal', name: '개인컵', price: -500 }, // 음수값
      ],
      extras: [
        { id: 'extra-shot', name: '샷 추가', price: 500 },
        {
          id: 'extra-syrup',
          name: '시럽 추가',
          price: 300,
        },
        // price 속성이 없는 옵션
        { id: 'extra-whip', name: '휘핑 추가' },
      ],
    },
  },
  {
    id: 'coffee-latte',
    name: '카페 라떼',
    // price가 없음 (undefined)
    description: null, // 명시적 null
    category: 'coffee',
    options: {
      // 일부 옵션 그룹만 있음
      temperature: [
        { id: 'temp-hot', name: '핫', price: null },
        { id: 'temp-ice', name: '아이스', price: 500 },
      ],
      // size 옵션이 없음
      cup: null, // 명시적 null
    },
  },
  {
    id: 'coffee-espresso',
    name: '에스프레소',
    price: 4000,
    description: '진하고 강렬한 풍미의 에스프레소 샷',
    category: 'coffee',
    options: {
      temperature: [
        // price 속성이 없는 옵션
        { id: 'temp-hot', name: '핫' },
      ],
      // 빈 배열
      size: [],
      // price가 undefined인 옵션
      cup: [
        {
          id: 'cup-disposable',
          name: '일회용컵',
          price: undefined,
        },
        { id: 'cup-mug', name: '머그컵', price: null },
      ],
      extras: undefined, // 명시적 undefined
    },
  },
]

// 차 메뉴 아이템 (3개)
export const teaItems = [
  {
    id: 'tea-earl-grey',
    name: '얼그레이 티',
    price: 4500,
    description:
      '베르가못 오일의 향긋함이 특징인 클래식 블랙 티',
    category: 'tea',
    options: {
      temperature: [
        { id: 'temp-hot', name: '핫', price: null },
        { id: 'temp-ice', name: '아이스', price: 500 },
      ],
      size: [
        { id: 'size-regular', name: '레귤러', price: null },
        { id: 'size-large', name: '라지', price: 1000 },
      ],
      cup: [
        {
          id: 'cup-disposable',
          name: '일회용컵',
          price: null,
        },
        { id: 'cup-mug', name: '머그컵', price: null },
        { id: 'cup-personal', name: '개인컵', price: -500 },
      ],
      extras: [
        { id: 'extra-honey', name: '꿀 추가', price: 500 },
        {
          id: 'extra-lemon',
          name: '레몬 추가',
          price: 300,
        },
      ],
    },
  },
  {
    id: 'tea-chamomile',
    name: '캐모마일 티',
    price: 4500,
    // description이 없음 (undefined)
    category: 'tea',
    options: {
      temperature: [
        { id: 'temp-hot', name: '핫', price: 0 }, // 0과 null 구분
      ],
      // 객체 대신 배열 (잘못된 형식)
      size: ['size-regular', 'size-large'],
      cup: undefined, // 명시적 undefined
      extras: [
        // id가 없는 옵션
        { name: '꿀 추가', price: 500 },
        {
          id: 'extra-lemon',
          name: '레몬 추가',
          price: 300,
        },
      ],
    },
  },
  {
    id: 'tea-green',
    // name이 없음 (undefined)
    price: '4500', // 숫자 대신 문자열
    description: '맑고 깔끔한 풍미의 전통 녹차',
    category: 'tea',
    // options이 없음 (undefined)
  },
]

// 스무디 메뉴 아이템 (3개)
export const smoothieItems = [
  {
    id: 'smoothie-strawberry',
    name: '딸기 스무디',
    price: 6000,
    description:
      '신선한 딸기와 요거트가 블렌딩된 부드러운 스무디',
    category: 'smoothie',
    options: {
      size: [
        { id: 'size-regular', name: '레귤러', price: null },
        { id: 'size-large', name: '라지', price: 1000 },
        { id: 'size-max', name: '맥스', price: 1500 },
      ],
      cup: [
        {
          id: 'cup-disposable',
          name: '일회용컵',
          price: null,
        },
        { id: 'cup-personal', name: '개인컵', price: -500 },
      ],
      extras: [],
    },
  },
  {
    id: 'smoothie-mango',
    name: '망고 스무디',
    price: 6500,
    description:
      '열대 과일의 여왕 망고의 달콤함을 그대로 담은 스무디',
    category: 'smoothie',
    options: null, // 명시적 null
    available: false,
  },
  {
    id: 'smoothie-blueberry',
    name: '블루베리 스무디',
    price: {}, // 잘못된 타입
    description:
      '달콤하고 상큼한 블루베리의 풍미가 가득한 스무디',
    category: 'smoothie',
    options: {
      size: null, // 명시적 null
      cup: [
        {
          id: 'cup-disposable',
          name: '일회용컵',
          price: null,
        },
        // id와 price가 없는 옵션
        { name: '개인컵' },
      ],
      extras: [
        {
          id: 'extra-protein',
          name: '단백질 추가',
          price: 1000,
        },
        { id: 'extra-honey', name: '꿀 추가', price: 500 },
      ],
    },
    // available 속성이 없음
  },
]

// 베이커리 메뉴 아이템 (3개)
export const bakeryItems = [
  {
    id: 'bakery-croissant',
    name: '크루아상',
    price: 3500,
    description:
      '바삭한 겉면과 부드러운 속을 가진 전통 프랑스식 크루아상',
    category: 'bakery',
    options: {}, // 빈 객체
    available: true,
  },
  {
    id: 'bakery-cheese-cake',
    name: '뉴욕 치즈케이크',
    price: null, // 명시적 null
    description:
      '부드럽고 크리미한 본연의 맛을 살린 뉴욕 스타일 치즈케이크',
    category: 'bakery',
    options: null, // 명시적 null
    available: true,
  },
  {
    // id가 빈 문자열
    id: '',
    name: '초코 머핀',
    price: 4000,
    description: '진한 초콜릿의 풍미가 가득한 촉촉한 머핀',
    // category가 잘못된 값
    category: 'dessert',
    options: undefined, // 명시적 undefined
    available: true,
  },
]

// 전체 메뉴 아이템 배열 (카테고리별 아이템 통합)
export const allMenuItems = [
  ...coffeeItems,
  ...teaItems,
  ...smoothieItems,
  ...bakeryItems,
]

// 카테고리별 메뉴 객체
export const menuByCategory = {
  coffee: coffeeItems,
  tea: teaItems,
  smoothie: smoothieItems,
  bakery: bakeryItems,
  // 빈 카테고리 (빈 배열)
  juice: [],
  // undefined 카테고리
  sandwich: undefined,
  // null 카테고리
  salad: null,
}

// 카테고리 정보
export const categories = [
  {
    id: 'coffee',
    name: '커피',
  },
  {
    id: 'tea',
    name: '차',
  },
  {
    id: 'smoothie',
    name: '스무디',
  },
  {
    id: 'bakery',
    name: '베이커리',
  },
  {
    id: 'juice',
    // name이 없음 (undefined)
  },
  {
    // id가 없음 (undefined)
    name: '샌드위치',
  },
  // 비어있는 객체
  {},
]

// 특정 상품들 조합
export const featuredProducts = [
  // 존재하는 아이템과 존재하지 않는 아이템 ID 조합
  'coffee-americano',
  'tea-earl-grey',
  'non-existent-product',
  '', // 빈 문자열 ID
]

// 옵션 요구사항 (필수 옵션 등 정의)
export const optionRequirements = {
  coffee: {
    temperature: {
      required: true,
      multiSelect: false,
      default: 'temp-hot',
    },
    size: {
      required: true,
      multiSelect: false,
      default: 'size-regular',
    },
    cup: {
      required: true,
      multiSelect: false,
      default: 'cup-disposable',
    },
    extras: {
      required: false,
      multiSelect: true,
      default: null,
    },
  },
  smoothie: {
    size: {
      required: true,
      multiSelect: false,
      default: 'size-regular',
    },
    cup: {
      required: true,
      multiSelect: false,
      default: 'cup-disposable',
    },
    extras: { required: false, multiSelect: true },
  },
  tea: {
    temperature: {
      required: true,
      multiSelect: false,
      default: 'temp-hot',
    },
    size: { required: false, multiSelect: false },
    cup: {
      required: true,
      multiSelect: false,
      default: 'cup-mug',
    },
    // extras 속성이 없음 (undefined)
  },
  bakery: null, // 명시적 null
  // juice 카테고리 속성이 없음 (undefined)
  sandwich: undefined, // 명시적 undefined
}

// 현재 장바구니 아이템
export const cartItems = [
  {
    menuItem: coffeeItems[0],
    quantity: 2,
    selectedOptions: {
      temperature: ['temp-ice'],
      size: ['size-large'],
      cup: ['cup-personal'],
      extras: ['extra-shot', 'extra-syrup'],
    },
    totalPrice: 12000,
  },
  {
    menuItem: teaItems[0],
    quantity: 1,
    // 선택된 옵션 정보가 없음 (undefined)
    totalPrice: 4500,
  },
  {
    // menuItem이 null
    menuItem: null,
    quantity: 1,
    selectedOptions: null,
    totalPrice: 0,
  },
  {
    // menuItem이 id만 있는 불완전한 객체
    menuItem: { id: 'bakery-croissant' },
    quantity: '2', // 숫자 대신 문자열
    selectedOptions: {},
    // totalPrice가 없음 (undefined)
  },
]
