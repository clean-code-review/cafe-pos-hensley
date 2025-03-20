import { PropsWithChildren } from 'react'

export const Header = ({
  title,
  children,
}: PropsWithChildren & { title: string }) => (
  <header className="pos-header">
    {title && <h1>{title}</h1>}
    {children}
  </header>
)
