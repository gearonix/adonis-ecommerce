import { FC } from 'react'
import s from './style.module.scss'
import Link from 'next/link'
import { AiOutlineApi, AiOutlineHome, GiTopHat } from 'shared/ui/icons'
import { Button } from 'shared/ui/kit'
import { routes } from 'shared/config/consts/routes'
import { useTranslation } from 'react-i18next'

const SignupChoice: FC = () => {
  const { t } = useTranslation()
  return <div className={s.signup_main}>
    <div className={s.wrapper}>
      <div className={s.home}>
        <Link href={routes.MAIN}>
          <AiOutlineHome/>
        </Link>
      </div>
      <h1 className={s.title}>{t('Who_are')}</h1>
      <div className={s.choice_container}>
        <Link href={routes.SIGNUP_CUSTOMER}>
          <div className={s.choice_block}>
            <AiOutlineApi/>
          </div>
        </Link>
        <Link href={routes.SIGNUP_SALESMAN}>
          <div className={s.choice_block}>
            <GiTopHat/>
          </div>
        </Link>
        <Link href={routes.SIGNUP_CUSTOMER}>
          <Button w={'150px'} color={'greyBordered'}>
            {t('Customer')}
          </Button>
        </Link>
        <Link href={routes.SIGNUP_SALESMAN}>
          <Button w={'150px'}>
            {t('Salesman')}
          </Button>
        </Link>
      </div>
      <p>{t('Already_have')} <Link href={'/login'}>
        <span>{t('Log_in')}</span>
      </Link></p>
    </div>
  </div>
}

export default SignupChoice
