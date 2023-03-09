const i18nConfig = {
  fallbackLng: 'en',
  debug: process.env.IS_DEV || false,
  interpolation: {
    escapeValue: false
  },
  backend: {
    loadPath: '/locales/{{lng}}/{{ns}}.json'
  }
}

export default i18nConfig
