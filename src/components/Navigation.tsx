import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Colors } from '../constants'
import arrow from '../assets/arrow.svg'

export function Navigation() {
  return (
    <Nav>
      <NavLinks>
        <NavItem path="example" link="THE PANCULTURISTS Party" sublink="Copy, Read Print" subpath="example/read" />
        <NavItem path="example" link="OUR MANIFESTO" />
        <NavItem path="example" link="COMMON POLICIES" />
        <NavItem path="example" link="BECOME A MEMBER" sublink="REGULAR OR INDIVIDUAL" subpath="example/types" />
        <NavItem path="example" link="CONTRIBUTE" sublink="SEE ALL OPEN BOUNTIES" subpath="example/bounties" />
        <NavItem path="example" link="THE PEOPLE’S FREE PRESS" sublink="Copy, Read Print" subpath="example/read" />
        <NavItem path="example" link="GENERAL ASSEMBLIES" />
        <NavItem path="example" link="WIKIPEDIA" />
        <NavItem path="example" link="THE BOARD " />
        <NavItem path="example" link="WHAT IS THE NETWORK STATE?" />
        <NavItem path="example" link="DISCUSS FORUM" />
        <NavItem path="example" link="THE PEOPLE’S SHOP" sublink="Copy, Read Print" subpath="example/read" />
        <NavItem path="example" link="CALENDAR & EVENTS" />
      </NavLinks>
    </Nav>
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

const Nav = styled.nav`
  width: 100%;
`

const NavLinks = styled.ul`
  display: flex;
  flex-direction: column;
  color: ${Colors.Black};
  border-bottom: 5px solid ${Colors.Black};

  @media (max-width: 769px) {
    border-bottom: 3px solid ${Colors.Black};
  }
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

  @media (max-width: 769px) {
    border-top: 3px solid ${Colors.Black};
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
