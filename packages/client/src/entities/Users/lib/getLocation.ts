import { t } from 'i18next'

export const getLocation = (country: string, city: string) => {
  if (!city && !country) {
    return t('Not indicated')
  }
  return [country, city].join(', ')
}
