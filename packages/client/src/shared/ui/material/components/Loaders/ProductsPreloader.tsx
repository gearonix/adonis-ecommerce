import { Card, Skeleton } from '@mui/material'
import { FC } from 'react'
import { useAdaptive } from 'shared/lib/hooks'


export const ProductsPreloader: FC = () => {
  const isMobile = useAdaptive(600)
  return <Card sx={{ height: isMobile ? 100 : 190, m: 2, borderRadius: '6px',
    display: 'flex', padding: '15px', position: 'relative' }}>

    <Skeleton sx={{ height: isMobile ? 100 : 160, width: isMobile ? 100 : 160, borderRadius: '6px' }}
      animation="wave" variant="rectangular" />
    <div>
      <Skeleton
        animation="wave"
        style={{ marginBottom: '30px', marginLeft: '18px', width:
              isMobile ? 100 : 185, height: 16 }}
      />
      <Skeleton
        animation="wave"
        style={{ marginBottom: 6, marginLeft: '18px', width: isMobile ? 160 : 185, height: 16 }}
      />
      <Skeleton
        animation="wave"
        style={{ marginBottom: 50, marginLeft: '18px', width: isMobile ? 160 : 185, height: 16 }}
      />
      <Skeleton
        animation="wave"
        style={{ marginBottom: 6, marginLeft: '18px', width: isMobile ? 160 : 240, height: 60, borderRadius: '6px' }}
      />
    </div>

  </Card>
}

