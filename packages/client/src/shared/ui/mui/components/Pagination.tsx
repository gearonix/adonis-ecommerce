import {ChangeEvent, FC} from 'react'
import {Pagination as MuiPagination} from '@mui/material'

interface PaginationProps{
  count: number,
  onChange: (value: number) => void,
  page: number
}


export const Pagination: FC<PaginationProps> = ({count, onChange, page}) => {
  const handleChange = (e: ChangeEvent<unknown>, value: number) => {
    onChange(value - 1)
  }

  return <MuiPagination count={Math.floor(count)} variant="outlined" shape="rounded" sx={{
    float: 'right',
    marginTop: '18px',
  }} onChange={handleChange} page={page + 1}/>
}
