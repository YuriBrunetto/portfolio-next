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

      {console.log('repos', repos)}

      <HeaderStyled>
        <h1>open-source</h1>
        <h2>projects made by me, to the world</h2>
      </HeaderStyled>

      <RepositoriesStyled>
        {repos.length &&
          repos.map((repo) => (
            <Repository
              key={repo.id}
              clone_url={repo.clone_url}
              name={repo.name}
              stargazers_count={repo.stargazers_count}
              description={repo.description}
            />
          ))}
      </RepositoriesStyled>

      <ButtonWrapper align='center'>
        <Button href='https://github.com/YuriBrunetto' title='see more' />
      </ButtonWrapper>
    </Layout>
  )
}

OpenSource.getInitialProps = async () => {
  const repos = await client.fetch(groq`
    *[_type == "post"]
  `)
  return { repos }
  // const res = await fetch(
  //   'https://api.github.com/users/YuriBrunetto/repos?sort=pushed'
  // )
  // let repos = await res.json()
  // repos = repos
  //   .sort((a, b) => b.stargazers_count - a.stargazers_count)
  //   .slice(0, 6)
  // return { repos }
}

OpenSource.defaultProps = {
  repos: [],
}

OpenSource.propTypes = {
  repos: PropTypes.array,
}

export default OpenSource
