import React from 'react'
import styled from 'styled-components'
import { Page, MenuContent } from '../components'
import { Logo } from '../components/top/Logo'
import { Navigation } from '../components/Navigation'

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
  margin-bottom: 24px;
`
