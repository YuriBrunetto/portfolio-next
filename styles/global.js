/* eslint-disable prettier/prettier */
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    --dark: #111111;
    --purple: #706FD3;
    --text: #E5E5E5;
  }

  ::selection {
    background-color: #333;
    color: var(--purple);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', sans-serif;
  }

  body {
    background-color: var(--dark);
    color: #fff;
  }

  a {
    cursor: pointer;
  }
`

export const CommonLimiter = styled.div`
  width: 960px;
  margin: 0 auto;
`

export default GlobalStyles