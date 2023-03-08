import { Paper, Table as MuiTable, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { FC } from 'react'
import { Product } from 'shared/types/slices'
import { useTheme } from 'shared/lib/hooks/useTheme'
import { useTranslation } from 'react-i18next'

export const Table: FC<{product: Product}> = ({ product }) => {
  const { isLight } = useTheme()
  const { t } = useTranslation()
  return (
    <div style={{ width: '60%' }}>
      <TableContainer component={Paper}>
        <MuiTable aria-label="a dense table">
          <TableHead sx={{ backgroundColor: isLight ? '#EFF2F4' : '#2a2a2a' }}>
            <TableRow>
              <TableCell>{t('Product_type')}</TableCell>
              <TableCell align="right">{t('Product_model')}</TableCell>
              <TableCell align="right">{t('Product_size')}</TableCell>
              <TableCell align="right">{t('Product_Design')}</TableCell>
              <TableCell align="right">{t('Product_Rating')}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {t(product.type)}
              </TableCell>
              <TableCell align="right">{t(product.model)}</TableCell>
              <TableCell align="right">{t(product.size)}</TableCell>
              <TableCell align="right">{product.design}</TableCell>
              <TableCell align="right">{product.rating}</TableCell>
            </TableRow>
          </TableBody>
        </MuiTable>
      </TableContainer>
    </div>

  )
}
