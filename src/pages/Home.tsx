import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Page, MenuContent } from '../components'
import { Logo } from '../components/top/Logo'
import { Colors } from '../constants'
import arrow from '../assets/arrow.svg'

export function Home() {
  return (
    <Page>
      <MenuContent>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <Navigation>
          <NavLinks>
            <NavItem path="party" link="THE PANCULTURISTS Party" sublink="Copy, Read Print" subpath="party/read" />
            <NavItem path="manifesto" link="OUR MANIFESTO" />
            <NavItem path="party" link="COMMON POLICIES" />
            <NavItem
              path="membership"
              link="BECOME A MEMBER"
              sublink="REGULAR OR INDIVIDUAL"
              subpath="membership/types"
            />
            <NavItem
              path="contribute"
              link="CONTRIBUTE"
              sublink="SEE ALL OPEN BOUNTIES"
              subpath="contribute/bounties"
            />
            <NavItem path="press" link="THE PEOPLE’S FREE PRESS" sublink="Copy, Read Print" subpath="press/read" />
            <NavItem path="assemblies" link="GENERAL ASSEMBLIES" />
            <NavItem path="wiki" link="WIKIPEDIA" />
            <NavItem path="board" link="THE BOARD " />
            <NavItem path="network" link="WHAT IS THE NETWORK STATE?" />
            <NavItem path="forum" link="DISCUSS FORUM" />
            <NavItem path="shop" link="THE PEOPLE’S SHOP" sublink="Copy, Read Print" subpath="shop/read" />
            <NavItem path="calendar" link="CALENDAR & EVENTS" />
          </NavLinks>
        </Navigation>
      </MenuContent>
    </Page>
  )
}

interface NavItemProps {
  path: string
  link: string
  sublink?: string
  subpath?: string
}

export function NavItem({ path, link, sublink, subpath }: NavItemProps) {
  const location = {
    pathname: `/${path}`,
    subpathname: `/${subpath}`,
  }

  return (
    <NavBlock>
      <StyledLink to={location.pathname}>{link}</StyledLink>
      <Arrow src={arrow} />
      {sublink && <SubLink to={location.subpathname}>{sublink}</SubLink>}
    </NavBlock>
  )
}

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 24px;
`

const Navigation = styled.nav`
  width: 100%;
`

const NavLinks = styled.ul`
  display: flex;
  flex-direction: column;
  color: ${Colors.Black};
  border-bottom: 5px solid ${Colors.Black};
`

const NavBlock = styled.li`
  display: flex;
  align-items: center;
  border-top: 5px solid ${Colors.Black};
  cursor: pointer;
  padding: 24px;

  @media (max-width: 1024px) {
    padding: 2vw;
  }
`

const StyledLink = styled(Link)`
  position: relative;
  color: ${Colors.Black};
  font-size: calc(24px + (72 - 24) * ((100vw - 320px) / (1440 - 320)));
  text-transform: uppercase;
  margin-right: 24px;

  @media (max-width: 600px) {
    margin-right: 8px;
  }
`

const Arrow = styled.img`
  width: 4vw;
  margin-right: 16px;
`

const SubLink = styled(Link)`
  max-width: 160px;
  font-size: calc(12px + (24 - 12) * ((100vw - 320px) / (1440 - 320)));
  text-transform: uppercase;
  color: ${Colors.Black};

  &:hover {
    text-decoration: underline;
    opacity: 0.7;
  }
`
