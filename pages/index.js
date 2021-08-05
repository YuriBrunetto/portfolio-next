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
            src='/assets/me.jpg'
            alt='Yuri Brunetto'
            width={140}
            height={140}
          />
        </PictureStyled>
        <TextStyled>
          <h1>hello, i&apos;m yuri!</h1>
          <p>
            <em>front-end developer</em> with 9 years of experience in web
            development, <em>musician</em> and <em>producer</em>. currently
            working as react developer @{' '}
            <a
              href='https://mysmartclinic.com.br/'
              title='My Smart Clinic'
              target='_blank'
              rel='noreferrer'
            >
              my smart clinic
            </a>
            .
          </p>

          <Socials />

          <ButtonWrapper>
            <Button href='/curriculum.pdf' title='curriculum' />
          </ButtonWrapper>
        </TextStyled>
      </WrapperStyled>
    </Layout>
  )
}
