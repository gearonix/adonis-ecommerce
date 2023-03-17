import { FormControl, IconButton, Input, InputAdornment } from '@mui/material'
import { AiOutlineSearch } from 'shared/ui/icons'
import { FC } from 'react'
import { FieldValues } from 'shared/lib/helpers'
import { useTranslation } from 'react-i18next'

interface Props{
    values?: FieldValues,
}

export const SearchInput: FC<Props> = ({ values }) => {
  const { t } = useTranslation()
  return <FormControl variant="outlined" fullWidth sx={{ marginBottom: '10px' }}>
    <Input
      id="outlined-adornment-password"
      sx={{ height: 42 }}
      placeholder={t('Search') || 'Search'}
      inputProps={{ ...values?.inputProps }}
      autoComplete={'off'}
      endAdornment={
        <InputAdornment position="end">
          <IconButton edge="end">
            <AiOutlineSearch size={'19px'}/>
          </IconButton>
        </InputAdornment>
      }
    />
  </FormControl>
}
