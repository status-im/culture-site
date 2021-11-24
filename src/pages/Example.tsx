import React from 'react'
import { useTranslation } from 'react-i18next'
import { Page, PageContent } from '../components'
import { Heading, HeadingWrapper, HomeLink, Navigation, StyledPageLink, Text } from '../constants/styles'

export function Example() {
  const { t } = useTranslation()

  return (
    <Page>
      <HeadingWrapper>
        <Heading>{t('example_heading')}</Heading>
      </HeadingWrapper>
      <PageContent>
        <Navigation>
          <HomeLink to="/">{t('home')}</HomeLink>
          <StyledPageLink to="/">{t('about')}</StyledPageLink>
        </Navigation>
        <main>
          <article>
            <Text>{t('example_text_1')}</Text>
            <Text>{t('example_text_2')}</Text>
            <Text>{t('example_text_3')}</Text>
            <Text>{t('example_text_4')}</Text>
          </article>
        </main>
      </PageContent>
    </Page>
  )
}
