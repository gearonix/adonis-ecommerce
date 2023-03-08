const i18nConfig = {
  fallbackLng: 'en',
  debug: true,
  interpolation: {
    escapeValue: false
  },
  backend: {
    loadPath: '/locales/{{lng}}/{{ns}}.json'
  }
}

export default i18nConfig
