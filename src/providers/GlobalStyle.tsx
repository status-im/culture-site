import { createGlobalStyle } from 'styled-components'
import { Colors, Fonts } from '../constants'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }

  body, html {
    margin: 0;
    width: 100%;
    height: 100%;
    background-color: ${Colors.White};
    font-family: ${Fonts.Body};
    font-weight: normal;
    font-size: 24px;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  button {
    font-family: ${Fonts.Body};
    border: none;
    background: none;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }
`
