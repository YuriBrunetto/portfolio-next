import React from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'

import Header from '@/components/header'
import Footer from '@/components/footer'

import { MainStyled, LimiterStyled } from './styles'

function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name='theme-color' content='#706FD3' />
        <title>hello, i&apos;m yuri!</title>
        <meta name='title' content='yuri brunetto' />
        <meta
          name='description'
          content='yuri brunetto is a front-end developer, musician and lo-fi producer.'
        />

        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://yuribrunetto.com.br/' />
        <meta property='og:title' content='yuri brunetto' />
        <meta
          property='og:description'
          content='yuri brunetto is a front-end developer, musician and lo-fi producer.'
        />
        <meta property='og:image' content='./logo512.png' />

        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://yuribrunetto.com.br/' />
        <meta property='twitter:title' content='yuri brunetto' />
        <meta
          property='twitter:description'
          content='yuri brunetto is a front-end developer, musician and lo-fi producer.'
        />
        <meta property='twitter:image' content='./twitter-card.png' />
      </Head>

      <MainStyled>
        <Header />
        <LimiterStyled>{children}</LimiterStyled>
        <Footer />
      </MainStyled>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
