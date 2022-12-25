import styled from 'styled-components'
import { CommonLimiter } from '@/styles/global'

export const HeaderStyled = styled.header`
  padding: 40px 0;

  @media (max-width: 959px) {
    padding: 16px 16px 32px;
  }

  a {
    text-decoration: none;
  }
`

export const WrapperStyled = styled(CommonLimiter)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const LogoStyled = styled.div`
  font-size: 32px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
`
