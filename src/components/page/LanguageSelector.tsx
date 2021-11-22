import React from 'react'
import { Select } from './Select'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { Colors } from '../../constants/styles'

const languages = [
  { name: 'EN', code: 'en' },
  { name: 'NL', code: 'nl' },
]

export const LanguageSelector = () => {
  const { t, i18n } = useTranslation()

  return (
    <Select
      value={t('language_name')}
      list={languages.map(({ name, code }) => (
        <Button key={code} onClick={() => i18n.changeLanguage(code)}>
          {name}
        </Button>
      ))}
    />
  )
}

const Button = styled.button`
  outline: none;
  color: ${Colors.White};
  font-size: calc(24px + (36 - 24) * ((100vw - 320px) / (1440 - 320)));

  &:hover {
    color: ${Colors.Gray};
  }
`
