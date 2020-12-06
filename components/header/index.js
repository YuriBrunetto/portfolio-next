import React from 'react'
import Link from 'next/link'

import Nav from '@/components/nav'
import { HeaderStyled, LogoStyled, WrapperStyled } from './styles'

const Header = () => (
  <HeaderStyled>
    <WrapperStyled>
      <Link href='/'>
        <LogoStyled title='yuri brunetto'>yb</LogoStyled>
      </Link>

      <Nav />
    </WrapperStyled>
  </HeaderStyled>
)

export default Header
