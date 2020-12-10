import React from 'react'
import Image from 'next/image'

import Layout from '@/components/layout'
import Socials from '@/components/socials'
import Button from '@/components/button'
import SEO from '@/components/seo'
import { WrapperStyled, PictureStyled, TextStyled } from '@/styles/home'
import { ButtonWrapper } from '@/styles/global'

export default function Home() {
  return (
    <Layout>
      <SEO />

      <WrapperStyled>
        <PictureStyled>
          <Image
            src='/assets/me.png'
            alt='Yuri Brunetto'
            width={140}
            height={140}
          />
        </PictureStyled>
        <TextStyled>
          <h1>hello, i&apos;m yuri!</h1>
          <p>
            i’m a front-end developer, musician and lo-fi producer. in love with{' '}
            <em>javascript</em>, <em>react</em> and <em>music</em>. currently
            working as a react developer @{' '}
            <a
              href='https://mysmartclinic.com.br/'
              title='My Smart Clinic'
              target='_blank'
              rel='noreferrer'
            >
              my smart clinic
            </a>
            . i have 8 years of experience in web development.
          </p>

          <Socials />

          <ButtonWrapper>
            <Button href='/curriculum.pdf' title='download my curriculum' />
          </ButtonWrapper>
        </TextStyled>
      </WrapperStyled>
    </Layout>
  )
}
