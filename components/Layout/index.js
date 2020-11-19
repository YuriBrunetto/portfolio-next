import React from 'react'
import PropTypes from 'prop-types'

import Header from '../Header'
import Footer from '../Footer'

import { MainStyled } from './styles'

function Layout({ children }) {
  return (
    <MainStyled>
      <Header />
      {children}
      <Footer />
    </MainStyled>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
