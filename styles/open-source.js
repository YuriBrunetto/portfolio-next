import styled from 'styled-components'

export const HeaderStyled = styled.header`
  h1 {
    @media (max-width: 959px) {
      font-size: 24px;
    }
  }

  h2 {
    font-size: 16px;
    font-weight: normal;
    color: var(--text);
    margin-top: 8px;
  }
`

export const RepositoriesStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;

  @media (max-width: 959px) {
    margin-top: 24px;
  }
`
