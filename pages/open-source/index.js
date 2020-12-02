import React from 'react'
import PropTypes from 'prop-types'
import { FaStar } from 'react-icons/fa'
import Emoji from 'react-emoji-render'

import Layout from '../../components/Layout'
import { HeaderStyled, RepositoriesStyled, RepositoryStyled } from './styles'

function OpenSource({ repos }) {
  return (
    <Layout>
      <HeaderStyled>
        <h1>open-source</h1>
        <h2>projects made by me, to the world</h2>
      </HeaderStyled>

      {console.log('repos', repos)}

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

OpenSource.defaultProps = {
  repos: [],
}

OpenSource.propTypes = {
  repos: PropTypes.array,
}

OpenSource.getInitialProps = async (ctx) => {
  const res = await fetch(
    'https://api.github.com/users/YuriBrunetto/repos?sort=pushed'
  )
  let repos = await res.json()
  repos = repos
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 6)
  return { repos }
}

export default OpenSource
