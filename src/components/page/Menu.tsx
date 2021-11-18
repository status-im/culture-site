import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Colors } from '../../constants/styles'
import { DiscordIcon } from '../icons/DiscordIcon'
import { GithubIcon } from '../icons/GithubIcon'
import { TwitterIcon } from '../icons/TwitterIcon'
import { MenuContent } from './Content'

export function Menu() {
  return (
    <NavigationMenu>
      <TopNavigation>
        <TopNavLinks>
          <TopLink to="/">Home</TopLink>
          <TopLink to="/support">Support us</TopLink>
          <Dropdown></Dropdown>
        </TopNavLinks>
      </TopNavigation>
      <Navigation>
        <NavLinks>
          <StyledLink to="/">WHAT’s ON</StyledLink>
          <StyledLink to="/">NEWS & PRESS</StyledLink>
          <StyledLink to="/">JOIN US</StyledLink>
          <StyledLink to="/">BECOME A MEMBER</StyledLink>
          <StyledLink to="/">CONTRIBUTE</StyledLink>
        </NavLinks>
      </Navigation>
      <SocialLinks>
        <SocialLink href="https://twitter.com" rel="noopener noreferrer">
          <TwitterIcon />
        </SocialLink>
        <SocialLink href="https://github.com" rel="noopener noreferrer">
          <GithubIcon />
        </SocialLink>
        <SocialLink href="https://discord.com" rel="noopener noreferrer">
          <DiscordIcon />
        </SocialLink>
      </SocialLinks>
    </NavigationMenu>
  )
}

export function Dropdown() {
  return (
    <MenuBlock>
      <MenuList></MenuList>
    </MenuBlock>
  )
}

const NavigationMenu = styled(MenuContent)`
  background-color: ${Colors.Black};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 998;
  padding: 0;
`
const TopNavigation = styled.div`
  width: 100%;
  color: ${Colors.White};
  padding: 24px;
`

const TopNavLinks = styled.div`
  display: flex;
`

const TopLink = styled(Link)`
  color: ${Colors.White};
  font-size: calc(24px + (36 - 24) * ((100vw - 320px) / (1440 - 320)));
  margin-right: 50px;

  @media (max-width: 1024px) {
    margin-right: 2vw;
  }
`

const Navigation = styled.nav`
  width: 60%;
  margin-bottom: 124px;
`

const NavLinks = styled.ul`
  display: flex;
  flex-direction: column;
  color: ${Colors.White};
  border-bottom: 5px solid ${Colors.White};
`

const StyledLink = styled(Link)`
  position: relative;
  color: ${Colors.White};
  font-size: calc(24px + (72 - 24) * ((100vw - 320px) / (1440 - 320)));
  text-transform: uppercase;
  border-top: 5px solid ${Colors.White};
  cursor: pointer;
  padding: 0 24px;
`

const MenuBlock = styled.div`
  width: 100%;
`

const MenuList = styled.ul`
  list-style: none;
`

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`
const SocialLink = styled.a`
  & + & {
    margin-left: 4vw;
  }
  &:hover > svg {
    fill: ${Colors.Gray};
  }
`
