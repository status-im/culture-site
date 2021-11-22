import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Colors } from '../../constants/styles'
import { DiscordIcon } from '../icons/DiscordIcon'
import { GithubIcon } from '../icons/GithubIcon'
import { TwitterIcon } from '../icons/TwitterIcon'
import { MenuContent } from './Content'
import { LanguageSelector } from './LanguageSelector'

export function Menu() {
  const { t, i18n } = useTranslation()
  
  return (
    <NavigationMenu>
      <TopNavigation>
        <TopLink to="/">{t('home')}</TopLink>
        <TopLink to="/support">{t('support')}</TopLink>
        <LanguageSelector />
      </TopNavigation>
      <Navigation>
        <NavLinks>
          <StyledLink to="/">{t('whats_on')}</StyledLink>
          <StyledLink to="/">{t('news')}</StyledLink>
          <StyledLink to="/">{t('join')}</StyledLink>
          <StyledLink to="/">{t('membership')}</StyledLink>
          <StyledLink to="/">{t('contribute')}</StyledLink>
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
  display: flex;
  color: ${Colors.White};
  padding: 24px;
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

  @media (max-width: 769px) {
    width: 100%;
  }
`

const NavLinks = styled.ul`
  display: flex;
  flex-direction: column;
  color: ${Colors.White};
  border-bottom: 5px solid ${Colors.White};

  @media (max-width: 769px) {
    border-bottom: 3px solid ${Colors.White};
  }
`

const StyledLink = styled(Link)`
  position: relative;
  color: ${Colors.White};
  font-size: calc(24px + (72 - 24) * ((100vw - 320px) / (1440 - 320)));
  text-transform: uppercase;
  border-top: 5px solid ${Colors.White};
  cursor: pointer;
  padding: 0 24px;

  @media (max-width: 769px) {
    border-top: 3px solid ${Colors.White};
  }
`

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
