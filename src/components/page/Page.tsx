import React, { ReactNode, useState } from 'react'
import { TopBar } from '../top'
import { Menu } from './Menu'

interface Props {
  children: ReactNode
}

export function Page({ children }: Props) {
  const [menuOpened, setMenuOpened] = useState(false)

  return (
    <>
      <TopBar menuOpened={menuOpened} setMenuOpened={setMenuOpened} />
      {children}
      {menuOpened && <Menu />}
    </>
  )
}
