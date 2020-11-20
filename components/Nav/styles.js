import styled from 'styled-components'

export const NavStyled = styled.nav`
  display: flex;
  align-items: center;
`

export const LinkStyled = styled.a`
  color: var(--text);
  text-decoration: none;
  position: relative;
  transition: color 0.1s;

  &:hover {
    color: #fff;

    &:after {
      background-color: var(--purple);
    }
  }

  &:after {
    content: '';
    height: 3px;
    width: 24px;
    background-color: transparent;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 6px);
    transition: background-color 0.1s, color 0.3s;
  }

  ${(props) =>
    props.active &&
    `
    color: #fff;

    &:after {
      background-color: var(--purple);
    }
  `}
`

export const SeparatorStyled = styled.span`
  color: var(--text);
  margin: 0 12px;
`
