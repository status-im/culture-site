import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Colors } from '../../constants/styles'
import arrow from '../../assets/arrow.svg'
import { useTranslation } from 'react-i18next'

export function Navigation() {
  const { t, i18n } = useTranslation()
  
  return (
    <Nav>
      <NavLinks>
        <NavItem path="example" link={t('party')} sublink={t('nav_sub')} subpath="example/read" />
        <NavItem path="example" link={t('manifesto')} />
        <NavItem path="example" link={t('policies')} />
        <NavItem path="example" link={t('membership')} sublink={t('membership_types')} subpath="example/types" />
        <NavItem path="example" link={t('contribute')} sublink={t('contribute_bounties')} subpath="example/bounties" />
        <NavItem path="example" link={t('press')} sublink={t('nav_sub')} subpath="example/read" />
        <NavItem path="example" link={t('assamblies')} />
        <NavItem path="example" link={t('wiki')} />
        <NavItem path="example" link={t('board')} />
        <NavItem path="example" link={t('network')} />
        <NavItem path="example" link={t('forum')} />
        <NavItem path="example" link={t('shop')} sublink={t('nav_sub')} subpath="example/read" />
        <NavItem path="example" link={t('calendar')} />
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
