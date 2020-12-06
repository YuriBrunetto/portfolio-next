import styled from 'styled-components'

export const WrapperStyled = styled.section`
  display: flex;
  align-items; flex-start;
  width: 100%;
  margin-top: 80px;
`

export const PictureStyled = styled.div`
  width: 140px;
  height: 140px;
  flex: 0 0 140px;
  border-radius: 50%;
  border: 3px solid var(--purple);
`

export const TextStyled = styled.div`
  margin-left: 32px;

  h1 {
    font-size: 24px;
  }

  p {
    font-size: 20px;
    line-height: 28px;
    margin-top: 16px;
    color: var(--text);

    a {
      color: var(--purple);
      text-decoration: none;
      font-weight: bold;
    }
  }
`
