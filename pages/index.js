import React from 'react'
import Head from 'next/head'

import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>yuri brunetto</title>
        <link rel='icson' href='/favicon.ico' />
      </Head>

      <h1>Hello world!</h1>
    </Layout>
  )
}
