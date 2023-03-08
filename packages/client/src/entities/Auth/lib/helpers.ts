import { t } from 'i18next'


export const getUIText = (mode: 'login' | 'signup') => {
  return mode == 'login' ? {
    title: t('Log_in'),
    linkText: t('Dont_have'),
    linkHref: '/signup',
    blueLinkText: t('Register_now')
  } : {
    title: t('Register_now'),
    linkText: t('Already_have'),
    linkHref: '/login',
    blueLinkText: t('Log_in')
  }
}
