import React from 'react'
import styled from 'styled-components'
import { Page, MenuContent } from '../components'
import { Logo } from '../components/top/Logo'
import { Navigation } from '../components/home/Navigation'

export function Home() {
  return (
    <Page>
      <MenuContent>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <Navigation />
      </MenuContent>
    </Page>
  )
}

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: -24px 0 100px;

  @media (max-width: 1024px) {
    margin: -24px 0 10vw;
  }
`
