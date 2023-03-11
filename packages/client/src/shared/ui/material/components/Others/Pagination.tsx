import { ChangeEvent, FC } from 'react'
import { Pagination as MuiPagination } from '@mui/material'

interface PaginationProps{
  count: number,
  onChange: (value: number) => void,
  page: number
}


export const Pagination: FC<PaginationProps> = ({ count, onChange, page }) => {
  const handleChange = (e: ChangeEvent<unknown>, value: number) => {
    onChange(value - 1)
  }
  if (Math.ceil(count) < 2) {
    return null
  }

  return <MuiPagination count={Math.ceil(count)} variant="outlined" shape="rounded" sx={{
    float: 'right',
    marginTop: '18px',
    marginBottom: '23px'
  }} onChange={handleChange} page={page + 1}/>
}
