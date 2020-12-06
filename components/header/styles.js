import styled from 'styled-components'
import { CommonLimiter } from '../../styles/global'

export const HeaderStyled = styled.header`
  padding: 40px 0;
`

export const WrapperStyled = styled(CommonLimiter)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const LogoStyled = styled.a`
  font-size: 32px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
`
