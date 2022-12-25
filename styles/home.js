import styled from 'styled-components'

export const WrapperStyled = styled.section`
  display: flex;
  align-items; flex-start;
  width: 100%;
  margin-top: 80px;

  @media (max-width: 959px) {
    margin-top: 16px;
    flex-direction: column;
  }
`

export const PictureStyled = styled.div`
  width: 140px;
  height: 140px;
  flex: 0 0 140px;
  border-radius: 50%;
  border: 3px solid var(--purple);
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 959px) {
    width: 100px;
    height: 100px;
    flex-basis: 100px;
  }
`

export const TextStyled = styled.div`
  margin-left: 32px;

  @media (max-width: 959px) {
    margin: 16px 0 0 0;
  }

  h1 {
    font-size: 24px;

    @media (max-width: 959px) {
      font-size: 20px;
    }
  }

  p {
    font-size: 20px;
    line-height: 28px;
    margin-top: 16px;
    color: var(--text);

    @media (max-width: 959px) {
      font-size: 16px;
      line-height: 24px;
    }

    span {
      color: #999;
    }

    a {
      color: var(--purple);
      text-decoration: none;
      font-weight: bold;
      display: inline-block;
      border-bottom: 2px solid transparent;
      transition: 0.2s border-bottom-color;

      &:hover {
        border-bottom-color: var(--purple);
      }
    }
  }
`
