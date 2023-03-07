const i18nConfig = {
  fallbackLng: 'en',
  debug: false,
  interpolation: {
    escapeValue: false
  },
  backend: {
    loadPath: '/locales/{{lng}}/{{ns}}.json'
  }
}

export default i18nConfig
