import React from 'react'

import { FooterStyled } from './styles'

const Footer = () => (
  <FooterStyled>
    <span>&copy; {new Date().getFullYear()}</span> made with 💜
  </FooterStyled>
)

export default Footer
