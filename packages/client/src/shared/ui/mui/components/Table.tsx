import {Paper, Table as MuiTable, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material'
import {FC} from 'react'
import {CurrentProduct} from 'shared/types/slices'
import {useTheme} from 'shared/lib/helpers/hooks/common'

export const Table: FC<{product: CurrentProduct}> = ({product}) => {
  const {isLight} = useTheme()
  return (
    <div style={{width: '60%'}}>
      <TableContainer component={Paper}>
        <MuiTable aria-label="a dense table">
          <TableHead sx={{backgroundColor: isLight ? '#EFF2F4' : '#2a2a2a'}}>
            <TableRow>
              <TableCell>Product Type</TableCell>
              <TableCell align="right">Product Model</TableCell>
              <TableCell align="right">Product Size</TableCell>
              <TableCell align="right">Product Design</TableCell>
              <TableCell align="right">Product Rating</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{'&:last-child td, &:last-child th': {border: 0}}}
            >
              <TableCell component="th" scope="row">
                {product.type}
              </TableCell>
              <TableCell align="right">{product.model}</TableCell>
              <TableCell align="right">{product.size}</TableCell>
              <TableCell align="right">{product.design}</TableCell>
              <TableCell align="right">{product.rating}</TableCell>
            </TableRow>
          </TableBody>
        </MuiTable>
      </TableContainer>
    </div>

  )
}
