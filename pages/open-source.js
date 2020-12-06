import React from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'
import { FaStar } from 'react-icons/fa'
import Emoji from 'react-emoji-render'

import Layout from '@/components/layout'
import {
  HeaderStyled,
  RepositoriesStyled,
  RepositoryStyled,
} from '@/styles/open-source'

function OpenSource({ repos }) {
  return (
    <Layout>
      <Head>
        <title>open-source | yuri brunetto</title>
      </Head>
      <HeaderStyled>
        <h1>open-source</h1>
        <h2>projects made by me, to the world</h2>
      </HeaderStyled>

      <RepositoriesStyled>
        {repos.length &&
          repos.map((repo) => (
            <RepositoryStyled
              key={repo.id}
              href={repo.clone_url}
              title={repo.name}
              target='_blank'
              rel='noreferrer'
            >
              <RepositoryStyled.Title>
                {repo.name}
                <RepositoryStyled.Span>
                  <FaStar /> {repo.stargazers_count}
                </RepositoryStyled.Span>
              </RepositoryStyled.Title>
              <RepositoryStyled.Description>
                <Emoji text={repo.description} />
              </RepositoryStyled.Description>
            </RepositoryStyled>
          ))}
      </RepositoriesStyled>
    </Layout>
  )
}

OpenSource.getInitialProps = async () => {
  const res = await fetch(
    'https://api.github.com/users/YuriBrunetto/repos?sort=pushed'
  )
  let repos = await res.json()
  repos = repos
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 6)
  return { repos }
}

OpenSource.defaultProps = {
  repos: [],
}

OpenSource.propTypes = {
  repos: PropTypes.array,
}

export default OpenSource
