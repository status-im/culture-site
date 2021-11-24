import React, { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Colors } from '../../constants/styles'
import arrow from '../../assets/arrow.svg'
import { useTranslation } from 'react-i18next'

export function Navigation() {
  const { t } = useTranslation()

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

  const [elTransform, setElTransform] = useState(0)
  const [style, setStyle] = useState({})

  const navBlock = useCallback((node) => {
    if (node !== null) {
      const width = node.offsetWidth + 40
      const transform = width - window.innerWidth
      if (transform > 0) setElTransform(transform)
    }
  }, [])

  return (
    <NavBlockWrapper>
      <NavBlock style={style} onMouseEnter={() => setStyle({ transform: `translateX(-${elTransform}px)` })}>
        <StyledLink to={location.pathname} ref={navBlock}>
          {link}
        </StyledLink>
        <Arrow src={arrow} />
        {sublink && <SubLink to={location.subpathname}>{sublink}</SubLink>}
      </NavBlock>
    </NavBlockWrapper>
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
    border-bottom: 3px solid currentColor;
  }
`
const NavBlockWrapper = styled.li`
  border-top: 5px solid currentColor;
  cursor: pointer;
  padding: 24px;
  white-space: nowrap;
  overflow: hidden;

  @media (max-width: 1024px) {
    padding: 2vw;
  }

  @media (max-width: 769px) {
    border-top: 3px solid currentColor;
  }
`
const NavBlock = styled.div`
  display: flex;
  align-items: center;
  transition: transform 3s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s;
`

const StyledLink = styled(Link)`
  position: relative;
  color: ${Colors.Black};
  font-size: calc(24px + (72 - 24) * ((100vw - 320px) / (1440 - 320)));
  line-height: 1;
  text-transform: uppercase;
  margin-right: 24px;

  @media (min-width: 1440px) {
    font-size: 72px;
  }

  @media (max-width: 1024px) {
    margin-right: 16px;
  }

  @media (max-width: 600px) {
    margin-right: 8px;
  }
`

const Arrow = styled.img`
  width: 4vw;
  margin-right: 16px;
`

const SubLink = styled(Link)`
  max-width: 200px;
  font-size: calc(12px + (24 - 12) * ((100vw - 320px) / (1440 - 320)));
  line-height: 1;
  text-transform: uppercase;
  color: ${Colors.Black};
  white-space: normal;

  &:hover {
    text-decoration: underline;
    opacity: 0.7;
  }

  @media (max-width: 769px) {
    display: none;
  }
`
