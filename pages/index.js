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
            9 years of experience in web development, <span>musician</span> and{' '}
            <span>producer</span>. currently working as{' '}
            <span>software engineer</span> @{' '}
            <a
              href='https://tmrw.org/'
              title='TMRW'
              target='_blank'
              rel='noreferrer'
            >
              TMRW
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
