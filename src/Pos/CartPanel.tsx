import { PropsWithChildren } from 'react'

export const CartPanel = ({
  className,
  children,
}: PropsWithChildren & { className?: string }) => (
  <div className={`pos-cart-panel ${className ?? ''}`}>{children}</div>
)
