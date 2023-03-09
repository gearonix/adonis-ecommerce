import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/kit'
import { toast } from 'react-toastify'

const CheckoutButton: FC = () => {
  const { t } = useTranslation()

  const onClick = () => {
    toast.info(t('Not a real service'))
  }

  return <Button color={'green'} w={'100%'} h={'54px'} onClick={onClick}>{t('Checkout')}</Button>
}

export default CheckoutButton
