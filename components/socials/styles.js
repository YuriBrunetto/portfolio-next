import styled from 'styled-components'

export const SocialsStyled = styled.div`
  display: flex;
  margin-top: 24px;
  align-items: flex-start;
`

export const LinkStyled = styled.a`
  color: var(--text);
  text-decoration: none;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;

  &:hover {
    color: var(--purple);
  }
`

export const SeparatorStyled = styled.span`
  margin: 0 10px;
  color: var(--text);
  font-size: 12px;
`
