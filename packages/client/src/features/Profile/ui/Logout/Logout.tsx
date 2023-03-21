import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'shared/types/redux'
import { logoutUser } from 'widgets/Login/store/thunks'


const Logout : FC = () => {
  const dispatch = useDispatch()
  const { t } = useTranslation()

  const onClick = () => {
    dispatch(logoutUser())
  }

  return <button className={'primary_button'} onClick={onClick}>{t('Sign out')}</button>
}


export default Logout
