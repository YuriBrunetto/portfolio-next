import styled from 'styled-components'
import { CommonLimiter } from '@/styles/global'

export const MainStyled = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const LimiterStyled = styled(CommonLimiter)`
  padding: 0 80px 80px;

  @media (max-width: 959px) {
    padding: 0 32px 32px;
  }
`
