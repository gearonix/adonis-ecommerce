import {FieldValues} from 'shared/lib/helpers/others'
import {ChangeEvent, FC} from 'react'
import {
  FormControl, RadioGroup as
  MuiRadioGroup,
} from '@mui/material'
import {RadioControlProps} from 'shared/ui/mui/components/Controls/Radio'

interface RadioGroupProps{
    values: FieldValues,
  Component: FC<RadioControlProps>,
}

export const RadioGroup: FC<RadioGroupProps> = ({values, Component}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = (event.target as HTMLInputElement).value
    values.setValue(value)
  }
  const groupValues = values.autoCompleteValues()
  const currentValue = values.getValue()?.toString()

  return <div style={{marginTop: -25}}>
    <FormControl>
      <MuiRadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        onChange={handleChange}
        value={currentValue}

      >
        {groupValues.map((label, idx) => {
          const name = groupValues[idx].toString()
          return <Component key={idx} label={label} name={name} checked={currentValue === name}/>
        })}
      </MuiRadioGroup>
    </FormControl>

  </div>
}


