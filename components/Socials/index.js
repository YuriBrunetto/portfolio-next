import React from 'react'

import socials from './data.json'
import { SocialsStyled, LinkStyled, SeparatorStyled } from './styles'

const Socials = () => (
  <SocialsStyled>
    {socials.map((social, i) => (
      <>
        <LinkStyled
          key={i}
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
      </>
    ))}
  </SocialsStyled>
)

export default Socials
