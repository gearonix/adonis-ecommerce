import { FC, memo } from 'react'
import s from './style.module.scss'
import { Switcher } from 'shared/ui/material'
import { useTheme } from 'shared/lib/hooks'
import { useTranslation } from 'react-i18next'
import { useLanguage } from 'shared/lib/hooks/useLanguage'
import { AiOutlineGithub } from 'shared/ui/icons'
import Link from 'next/link'
import { MyLinks } from 'shared/config/consts/myLinks'
import { FaLanguage } from 'react-icons/fa'
import { BsMoon } from 'react-icons/bs'


const HeaderDropDowns: FC = memo(() => {
  const { toggleTheme, isLight } = useTheme()
  const { toggleLang, isEnglish } = useLanguage()
  const { t } = useTranslation()
  return <div className={s.dropdowns}>
    <Switcher onChange={toggleTheme} value={!isLight} label={t('Dark_mode')}
      color={'secondary'}/>
    <BsMoon className={s.mobile} onClick={toggleTheme}/>
    <Switcher onChange={toggleLang} value={!isEnglish}
      label={t('Russian')} Icon={FaLanguage}/>
    <FaLanguage className={s.mobile} onClick={toggleLang}/>
    <Link href={MyLinks.PROJECT}>
      <div className={s.github}>
        <AiOutlineGithub/>
        <h2>Github</h2>
      </div>
    </Link>
  </div>
})

export default HeaderDropDowns
