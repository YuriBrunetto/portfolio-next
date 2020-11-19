import React from 'react'
import PropTypes from 'prop-types'
import GlobalStyles from '../styles/GlobalStyles'

function Portfolio({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  )
}

Portfolio.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.object.isRequired,
}

export default Portfolio
