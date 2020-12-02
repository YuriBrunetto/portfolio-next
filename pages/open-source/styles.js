import styled from 'styled-components'

export const HeaderStyled = styled.header`
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
`

export const RepositoryStyled = styled.a`
  background-color: rgba(255, 255, 255, 0.05);
  padding: 20px 30px;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.01);
  }

  &:not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
`

RepositoryStyled.Title = styled.div`
  align-items: center;
  color: #fff;
  display: flex;
  font-weight: bold;
  font-size: 20px;
`

RepositoryStyled.Span = styled.span`
  align-items: center;
  display: flex;
  font-size: 12px;
  line-height: 16px;
  margin-left: 12px;

  svg {
    fill: var(--purple);
    height: 16px;
    margin-right: 4px;
    width: 16px;
  }
`

RepositoryStyled.Description = styled.div`
  color: rgba(255, 255, 255, 0.7);
  margin-top: 8px;
`
