import React from 'react'
import Link from 'next/link'

import { NavStyled, LinkStyled, SeparatorStyled } from './styles'

const Nav = () => (
  <NavStyled>
    <Link href='/'>
      <LinkStyled title='about' active>
        about
      </LinkStyled>
    </Link>
    <SeparatorStyled>{'//'}</SeparatorStyled>
    <Link href='/open-source' title='open-source'>
      <LinkStyled title='open-source'>open-source</LinkStyled>
    </Link>
  </NavStyled>
)

export default Nav
