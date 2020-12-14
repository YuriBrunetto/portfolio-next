import React from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'
import groq from 'groq'

import client from '../client'

import Layout from '@/components/layout'
import Repository from '@/components/repository'
import Button from '@/components/button'
import SEO from '@/components/seo'
import { HeaderStyled, RepositoriesStyled } from '@/styles/open-source'
import { ButtonWrapper } from '@/styles/global'

function OpenSource({ repos }) {
  return (
    <Layout>
      <SEO
        title='open-source | yuri brunetto'
        description='projects made by me, to the world.'
        url='https://yuribrunetto.com.br/open-source'
      />

      <HeaderStyled>
        <h1>open-source</h1>
        <h2>projects made by me, to the world</h2>
      </HeaderStyled>

      <RepositoriesStyled>
        {repos.length &&
          repos.map((repo) => (
            <Repository
              key={repo._id}
              url={repo.url}
              title={repo.title}
              description={repo.description[0].children[0].text}
            />
          ))}
      </RepositoriesStyled>

      <ButtonWrapper align='center'>
        <Button
          href='https://github.com/YuriBrunetto?tab=repositories'
          title='see more'
        />
      </ButtonWrapper>
    </Layout>
  )
}

OpenSource.getInitialProps = async () => {
  let repos = await client.fetch(groq`
    *[_type == "repos"]
  `)
  repos = repos.sort((a, b) => a.title.localeCompare(b.title))

  return { repos }
}

OpenSource.defaultProps = {
  repos: [],
}

OpenSource.propTypes = {
  repos: PropTypes.array,
}

export default OpenSource
