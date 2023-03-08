import { FormControlLabel, Switch } from '@mui/material'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

interface Props{
    onChange: () => void,
    value: boolean
}


export const ThemeSwitcher: FC<Props> = ({ onChange, value }) => {
  const { t } = useTranslation()
  return <FormControlLabel control={
    <Switch color="secondary" checked={value} onChange={onChange}
    />} label={t('Dark_mode')} />
}
