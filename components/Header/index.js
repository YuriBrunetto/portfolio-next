import React from 'react'
import Link from 'next/link'

import Menu from '../Menu'
import { HeaderStyled, LogoStyled, WrapperStyled } from './styles'

const Header = () => (
  <HeaderStyled>
    <WrapperStyled>
      <Link href='/'>
        <LogoStyled title='yuri brunetto'>yb</LogoStyled>
      </Link>

      <Menu />
    </WrapperStyled>
  </HeaderStyled>
)

export default Header
