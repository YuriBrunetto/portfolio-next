import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

const SEO = ({ title, description, url }) => (
  <Head>
    <title>{title ? title : 'yuri brunetto'}</title>
    <link rel='icson' href='/favicon.ico' />
    <meta name='theme-color' content='#706FD3' />
    <meta name='title' content={title ? title : 'yuri brunetto'} />
    <meta
      name='description'
      content={
        description
          ? description
          : 'yuri brunetto is a front-end developer, musician and lo-fi producer.'
      }
    />

    <meta property='og:type' content='website' />
    <meta
      property='og:url'
      content={url ? url : 'https://yuribrunetto.com.br/'}
    />
    <meta property='og:title' content={title ? title : 'yuri brunetto'} />
    <meta
      property='og:description'
      content={
        description
          ? description
          : 'yuri brunetto is a front-end developer, musician and lo-fi producer.'
      }
    />
    <meta
      property='og:image'
      content='https://yuribrunetto.com.br/logo512.png'
    />

    <meta property='twitter:card' content='summary_large_image' />
    <meta
      property='twitter:url'
      content={url ? url : 'https://yuribrunetto.com.br/'}
    />
    <meta property='twitter:title' content={title ? title : 'yuri brunetto'} />
    <meta
      property='twitter:description'
      content={
        description
          ? description
          : 'yuri brunetto is a front-end developer, musician and lo-fi producer.'
      }
    />
    <meta
      property='twitter:image'
      content='https://yuribrunetto.com.br/twitter-card.png'
    />
  </Head>
)

SEO.defaultProps = {
  title: '',
  description: '',
  url: '',
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
}

export default SEO
