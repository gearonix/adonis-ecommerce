import { FC } from 'react'
import s from './style.module.scss'
import { PrimarySelect } from 'shared/ui/kit'
import { Switcher } from 'shared/ui/material'
import { useTheme } from 'shared/lib/hooks'
import { useTranslation } from 'react-i18next'
import { useLanguage } from 'shared/lib/hooks/useLanguage'


const HeaderDropDowns: FC = () => {
  const { toggleTheme, isLight } = useTheme()
  const { toggleLang, isEnglish } = useLanguage()
  const { t } = useTranslation()
  return <div className={s.dropdowns}>
    <Switcher onChange={toggleTheme} value={!isLight} label={t('Dark_mode')} color={'secondary'}/>
    <Switcher onChange={toggleLang} value={!isEnglish} label={'Russian'} />
  </div>
}

export default HeaderDropDowns
