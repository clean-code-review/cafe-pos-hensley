import { Header } from './\bHeader'
import { Main } from './Main'
import { Content } from './Content'
import { OrderPanel } from './OrderPanel'
import { CartPanel } from './CartPanel'
import { CategoryPanel } from '@/PosPage/CategoryPanel'

// 서브컴포넌트 연결
// CartPanel.Item = CartItem
// CartPanel.Summary = CartSummary
// CartPanel.Actions = CartActions

// POS 객체 서브컴포넌트 연결
export const Pos = {
  Header,
  Main,
  Content,
  OrderPanel,
  CartPanel,
  CategoryPanel,
}
