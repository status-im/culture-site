import React from 'react'
import styled from 'styled-components'
import { Colors } from '../../constants'
import burger from '../../assets/burger.svg'
import close from '../../assets/close.svg'

interface TopBarProps {
  menuOpened: boolean
  setMenuOpened: (val: boolean) => void
}

export function TopBar({ menuOpened, setMenuOpened }: TopBarProps) {
  return (
    <Bar>
      <MenuText>Menu</MenuText>
      <BurgerBtn onClick={() => setMenuOpened(!menuOpened)}>
        <Icon src={menuOpened ? close : burger} />
      </BurgerBtn>
    </Bar>
  )
}

const Bar = styled.header`
  background-color: ${Colors.White};
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 24px;

  @media (max-width: 1024px) {
    padding: 2vw;
  }
`

const MenuText = styled.p`
  font-size: calc(24px + (36 - 24) * ((100vw - 320px) / (1440 - 320)));
  text-transform: uppercase;
`

const BurgerBtn = styled.button`
  margin-left: 2vw;
  padding: 0;
  position: relative;
  z-index: 999;
  background-color: transparent;
`
const Icon = styled.img`
  width: 48px;
  height: 48px;
`
