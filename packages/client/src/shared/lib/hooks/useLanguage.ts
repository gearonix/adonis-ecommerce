import { useTranslation } from 'react-i18next'
import dayjs from 'dayjs'

export const useLanguage = () => {
  const { t, i18n } = useTranslation()

  const toggleLang = () => {
    const fallbackLng = i18n.language === 'en' ? 'ru' : 'en'
    i18n.changeLanguage(fallbackLng)
    dayjs.locale(fallbackLng)
  }

  const isEnglish = i18n.language === 'en'


  return {
    t: (word: string) => t(word) || '',
    toggleLang,
    isEnglish
  }
}
