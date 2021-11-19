import styled from 'styled-components'
import { Colors } from '../../constants'

export const PageContent = styled.div`
  position: relative;
  background-color: ${Colors.White};
  margin: 0 auto;
  max-width: 1072px;
  padding: 48px 0;

  @media (max-width: 1440px) {
    padding: 24px;
  }

  @media (max-width: 769px) {
    padding: 24px 16px;
  }
`

export const MenuContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  padding: 24px 0;
`
