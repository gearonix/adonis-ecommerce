import { FC } from 'react'
import { Checkbox as MuiCheckBox, FormControlLabel } from '@mui/material'
import { FieldValues } from 'shared/lib/helpers'

interface Checkbox{
  title: string,
  values: FieldValues
}

export const Checkbox: FC<Checkbox> = ({ title, values }) => {
  const { getValue, setValue } = values
  const currentValue = getValue()

  const onChange = () => {
    setValue(!currentValue)
  }
  if (!values) {
    return null
  }
  return <FormControlLabel control={<MuiCheckBox
    style={{ marginTop: -8, height: 25 }}
    onChange={onChange}
  />
  }
  label={title} sx={{ display: 'block', height: 25 }} />
}

