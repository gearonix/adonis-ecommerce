import { FormControl, FormHelperText, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material'
import { FieldValues } from 'shared/lib/helpers'
import { FC } from 'react'
import { IoIosResize } from 'react-icons/io'
import { Display } from 'shared/lib/components'
import { useTranslation } from 'react-i18next'

interface StandardSelectProps{
  title: string,
  values: FieldValues,
  Icon?: FC
}


export const StandardSelect: FC<StandardSelectProps> = ({ title, values, Icon }) => {
  const { t } = useTranslation()
  const selectValues = values.autoCompleteValues()


  const onChange = (e: SelectChangeEvent<number>) => {
    const value = selectValues[e.target.value as number]
    values.setValue(value)
  }

  return <FormControl size={'small'} sx={{ width: '30%', marginTop: '20px', marginBottom: '20px' }}>
    <Typography>{Icon && <Icon/>} {title}</Typography>
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      error={!!values.error}
      onChange={onChange}
      sx={{ marginTop: '8px' }}
      label={title}
    >
      {selectValues.map((item, idx) =>
        <MenuItem value={selectValues.indexOf(item)} key={idx}>{t(item)}</MenuItem>)}
    </Select>
    <Display when={values.error}>
      <FormHelperText error id="accountId-error" sx={{ fontSize: 14, marginTop: '3px' }}>
        {values.error}
      </FormHelperText>
    </Display>
  </FormControl>
}
