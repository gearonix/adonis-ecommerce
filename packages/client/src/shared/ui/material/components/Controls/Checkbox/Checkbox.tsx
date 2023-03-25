import { FC, useState } from 'react'
import { Checkbox as MuiCheckBox, FormControlLabel } from '@mui/material'
import { FieldValues } from 'shared/lib/helpers'
import { Display } from 'shared/lib/components'

interface Checkbox{
  title: string,
  values: FieldValues
}

export const Checkbox: FC<Checkbox> = ({ title, values }) => {
  const { getValue, setValue } = values
  const onChange = (e: any, newValue: boolean) => {
    setValue(newValue)
  }

  return <Display when={values}>
    <FormControlLabel control={<MuiCheckBox
      style={{ marginTop: -10, height: 25 }}
      onChange={onChange}
    />
    }
    label={title} sx={{ display: 'block', height: 25 }} />
  </Display>
}

