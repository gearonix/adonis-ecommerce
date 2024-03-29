import { FC } from 'react'
import s from './style.module.scss'
import { NextImage } from 'shared/ui/kit'
import { ThemesAssets } from 'shared/config/consts/assets'
import { FormControlLabel, Radio } from '@mui/material'
import { BiLogOut } from 'react-icons/bi'
import { HiOutlineMoon } from 'react-icons/hi'
import { FaLanguage } from 'react-icons/fa'
import { useLanguage, useTheme } from 'shared/lib/hooks'
import { Theme } from 'shared/config/consts/themes'
import cn from 'classnames'
import { publicAssets } from 'shared/lib/helpers'

interface SettingsProps{
  Logout: FC
}


const Settings : FC<SettingsProps> = ({ Logout }) => {
  const { setTheme, theme, isLight } = useTheme()
  const { isEnglish, toggleLang, t } = useLanguage()

  return <div className={cn(s.settings, 'with_theme', theme)}>
    <div className={s.theme_container}>
      <h3><HiOutlineMoon/> {t('Theme')}</h3>
      <div className={s.dropdowns}>
        <div className={s.theme}
          onClick={() => setTheme?.(Theme.LIGHT)}>
          <div className={s.image_wrapper}>
            <Radio className={s.radio}
              checked={isLight}/>
            <NextImage src={publicAssets(ThemesAssets.LIGHT)} />
          </div>
          <h4>{t('Light')}</h4>
        </div>
        <div className={s.theme}
          onClick={() => setTheme?.(Theme.DARK)}>
          <div className={s.image_wrapper}>
            <Radio className={s.radio}
              checked={!isLight}/>
            <NextImage src={publicAssets(ThemesAssets.DARK)} />
          </div>
          <h4>{t('Dark')}</h4>
        </div>
      </div>
    </div>
    <div className={s.language_container}>
      <h3><FaLanguage/> {t('Language')}</h3>
      <div className={s.languages}>
        <FormControlLabel
          control={<Radio checked={!isEnglish} onClick={toggleLang}/>}
          label={t('Russian')} />
        <FormControlLabel
          control={<Radio checked={isEnglish} onClick={toggleLang}/>}
          label={t('English')} />
      </div>
    </div>
    <div className={s.logout_container}>
      <h3><BiLogOut/> {t('Sign out')}</h3>
      <Logout/>
    </div>
  </div>
}


export default Settings
