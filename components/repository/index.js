import React from 'react'
import PropTypes from 'prop-types'
import Emoji from 'react-emoji-render'
import { FaStar } from 'react-icons/fa'

import { RepositoryStyled } from './styles'

const Repository = ({ clone_url, name, stargazers_count, description }) => (
  <RepositoryStyled
    href={clone_url}
    title={name}
    target='_blank'
    rel='noreferrer'
  >
    <RepositoryStyled.Title>
      {name}
      <RepositoryStyled.Span>
        <FaStar /> {stargazers_count}
      </RepositoryStyled.Span>
    </RepositoryStyled.Title>
    {!!description && (
      <RepositoryStyled.Description>
        <Emoji text={description} />
      </RepositoryStyled.Description>
    )}
  </RepositoryStyled>
)

Repository.propTypes = {
  clone_url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  stargazers_count: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
}

export default Repository
