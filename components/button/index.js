import React from 'react'
import PropTypes from 'prop-types'

import { LinkStyled } from './styles'

const Button = ({ href, title }) => (
  <LinkStyled href={href} title={title} target='blank' rel='noreferrer'>
    {title}
  </LinkStyled>
)

Button.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Button
