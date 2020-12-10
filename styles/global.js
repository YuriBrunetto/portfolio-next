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
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: ${(props) => (props.align ? props.align : 'start')};
  margin-top: 40px;

  @media (max-width: 959px) {
    margin-top: 24px;
  }
`

export default GlobalStyles
