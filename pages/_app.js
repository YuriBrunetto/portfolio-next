import React from 'react'
import PropTypes from 'prop-types'
import GlobalStyles from '../styles/GlobalStyles'
import dynamic from 'next/dynamic'
import 'nprogress/nprogress.css'

const TopProgressBar = dynamic(
  () => {
    return import('components/TopProgressBar')
  },
  { ssr: false }
)

function Portfolio({ Component, pageProps }) {
  return (
    <>
      <TopProgressBar />
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
