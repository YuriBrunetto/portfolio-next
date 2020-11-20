import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { NavStyled, LinkStyled, SeparatorStyled } from './styles'

const Nav = () => {
  const { route } = useRouter()

  return (
    <NavStyled>
      <Link href='/'>
        <LinkStyled title='about' active={route === '/'}>
          about
        </LinkStyled>
      </Link>
      <SeparatorStyled>{'//'}</SeparatorStyled>
      {console.log(route)}
      <Link href='/open-source' title='open-source'>
        <LinkStyled title='open-source' active={route === '/open-source'}>
          open-source
        </LinkStyled>
      </Link>
    </NavStyled>
  )
}

export default Nav
