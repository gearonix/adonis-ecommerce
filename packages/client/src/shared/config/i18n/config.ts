import appConfig from 'app/config/config'

const i18nConfig = {
  fallbackLng: 'en',
  debug: false,
  interpolation: {
    escapeValue: false
  },
  backend: {
    loadPath: `${appConfig.PUBLIC_FOLDER}/locales/{{lng}}/{{ns}}.json`
  }
}

export default i18nConfig
