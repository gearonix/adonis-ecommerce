import { useTranslation } from 'react-i18next'

export const useLanguage = () => {
  const { t, i18n } = useTranslation()

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
  }

  const isEnglish = i18n.language === 'en'


  return {
    t: (word: string) => t(word) || '',
    toggleLang,
    isEnglish
  }
}
