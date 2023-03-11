import { Autocomplete, TextField, Typography } from '@mui/material'
import { FC } from 'react'
import { FieldValues } from 'shared/lib/helpers'
import { useTheme } from 'shared/lib/hooks'
import { Display } from 'shared/lib/components'
import { useTranslation } from 'react-i18next'

interface AutoCompleteProps{
  title: string,
  values: FieldValues,
  Icon?: FC
}

export const AutoComplete: FC<AutoCompleteProps> = ({ title, values, Icon }) => {
  const { isLight } = useTheme()

  const currentValues = values.autoCompleteValues()

  const onChange = (e: any, newValue: string[]) => {
    values.setValue(newValue)
  }

  return <Display when={values}>
    <Typography sx={{ color: isLight ? 'black' : 'white', marginBottom: '7px'
    }}>{Icon && <Icon /> } {title}</Typography>
    <Autocomplete
      multiple
      size="small"
      onChange={onChange}
      options={currentValues}
      getOptionLabel={(val: string) => val}
      renderInput={(params) => (
        <TextField {...params} label={title} placeholder={title} />
      )}
      sx={{ width: '90%' }}
    />
  </Display>
}
