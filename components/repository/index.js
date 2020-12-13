import React from 'react'
import PropTypes from 'prop-types'
import Emoji from 'react-emoji-render'

import { RepositoryStyled } from './styles'

const Repository = ({ url, title, description }) => (
  <RepositoryStyled href={url} title={title} target='_blank' rel='noreferrer'>
    <RepositoryStyled.Title>{title}</RepositoryStyled.Title>
    {!!description && (
      <RepositoryStyled.Description>
        <Emoji text={description} />
      </RepositoryStyled.Description>
    )}
  </RepositoryStyled>
)

Repository.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default Repository
