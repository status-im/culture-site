import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import en from './translations/en.json'
import nl from './translations/nl.json'

const resources = {
  en: {
    translation: en,
  },
  nl: {
    translation: nl,
  },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources,
  })

export default i18n
