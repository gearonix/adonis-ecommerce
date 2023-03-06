import { Card, Skeleton } from '@mui/material'
import { FC } from 'react'


export const ProductsPreloader: FC = () => {
  return <Card sx={{ height: 190, m: 2, borderRadius: '6px',
    display: 'flex', padding: '15px', position: 'relative' }}>

    <Skeleton sx={{ height: 185, width: 185, borderRadius: '6px' }}
      animation="wave" variant="rectangular" />
    <div>
      <Skeleton
        animation="wave"
        style={{ marginBottom: '30px', marginLeft: '18px', width: 180, height: 16 }}
      />
      <Skeleton
        animation="wave"
        style={{ marginBottom: 6, marginLeft: '18px', width: 180, height: 16 }}
      />
      <Skeleton
        animation="wave"
        style={{ marginBottom: 50, marginLeft: '18px', width: 180, height: 16 }}
      />
      <Skeleton
        animation="wave"
        style={{ marginBottom: 6, marginLeft: '18px', width: 240, height: 60, borderRadius: '6px' }}
      />
    </div>

  </Card>
}

