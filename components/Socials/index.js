import React, { Fragment } from 'react'

import socials from './data.json'
import { SocialsStyled, LinkStyled, SeparatorStyled } from './styles'

const Socials = () => (
  <SocialsStyled>
    {socials.map((social, i) => (
      <Fragment key={social.href}>
        <LinkStyled
          href={
            social.title !== 'E-mail' ? social.href : `mailto:${social.href}`
          }
          title={social.title}
          target='_blank'
          rel='noreferrer'
        >
          {social.title}
        </LinkStyled>
        {i !== socials.length - 1 && <SeparatorStyled>{'//'}</SeparatorStyled>}
      </Fragment>
    ))}
  </SocialsStyled>
)

export default Socials
