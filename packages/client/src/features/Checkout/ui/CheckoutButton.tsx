import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/kit'

const CheckoutButton: FC = () => {
  const { t } = useTranslation()
  return <Button color={'green'} w={'100%'} h={'54px'}>{t('Checkout')}</Button>
}

export default CheckoutButton
