import styled from 'styled-components'

export const RepositoryStyled = styled.a`
  background-color: rgba(255, 255, 255, 0.05);
  padding: 16px 24px;
  text-decoration: none;
  transition: 0.3s;

  @media (max-width: 959px) {
    padding: 16px;
  }

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
  font-size: 18px;

  @media (max-width: 959px) {
    font-size: 16px;
  }
`

RepositoryStyled.Span = styled.span`
  align-items: center;
  display: flex;
  font-size: 12px;
  line-height: 16px;
  margin-left: 12px;
  color: var(--purple);

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
  font-size: 14px;

  @media (max-width: 959px) {
    font-size: 12px;
  }
`
