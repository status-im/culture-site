import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Colors } from '../constants/styles'
import arrowRight from '../assets/arrow-right.svg'

export const HeadingWrapper = styled.div`
  border-top: 5px solid ${Colors.Black};
  border-bottom: 5px solid ${Colors.Black};
  padding: 24px;

  @media (max-width: 1024px) {
    padding: 2vw;
  }

  @media (max-width: 769px) {
    border-top: 3px solid ${Colors.Black};
    border-bottom: 3px solid ${Colors.Black};
  }
`

export const Heading = styled.h1`
  color: ${Colors.Black};
  font-size: calc(24px + (72 - 24) * ((100vw - 320px) / (1440 - 320)));
  font-weight: normal;
  text-transform: uppercase;
  max-width: 1072px;
  margin: 0 auto;

  @media (min-width: 1440px) {
    font-size: 72px;
  }
`

export const Navigation = styled.nav`
  width: 100%;
  display: flex;
  margin-bottom: 48px;

  @media (max-width: 769px) {
    margin-bottom: 24px;
  }
`

export const HomeLink = styled(Link)`
  color: ${Colors.Black};
  font-size: calc(24px + (36 - 24) * ((100vw - 320px) / (1440 - 320)));
  text-transform: uppercase;

  &:hover {
    text-decoration: underline;
    opacity: 0.7;
  }

  @media (min-width: 1440px) {
    font-size: 36px;
  }
`

export const StyledPageLink = styled(Link)`
  color: ${Colors.Black};
  font-size: calc(24px + (36 - 24) * ((100vw - 320px) / (1440 - 320)));
  text-transform: uppercase;
  position: relative;
  padding-left: 32px;

  @media (max-width: 769px) {
    padding-left: 24px;
  }

  &:before {
    content: '';
    position: absolute;
    width: 30px;
    height: 30px;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    background: url(${arrowRight});
    background-position: contain;

    @media (max-width: 769px) {
      width: 24px;
      height: 24px;
    }
  }

  &:hover {
    text-decoration: underline;
    opacity: 0.7;
  }

  @media (min-width: 1440px) {
    font-size: 36px;
  }
`

export const Text = styled.p`
  font-size: calc(16px + (24 - 16) * ((100vw - 320px) / (1440 - 320)));
  margin-bottom: 32px;

  @media (min-width: 1440px) {
    font-size: 24px;
  }
`
