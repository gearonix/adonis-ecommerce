import { Card, Skeleton } from '@mui/material'
import { FC } from 'react'


export const UserPreloader: FC = () => {
  return <Card sx={{ width: '88%', height: 560, margin: '0 auto', marginTop: '40px' }}>

    <Skeleton sx={{ height: 370, width: '100%', borderRadius: '6px' }}
      animation="wave" variant="rectangular" />
    <div style={{ display: 'flex' }}>
      <Skeleton sx={{ height: 180, width: 180, marginLeft: '50px', marginTop: '-8%',
        backgroundColor: 'rgba(68,68,68,0.5)' }}
      animation="wave" variant="circular" />
      <div>
        <Skeleton
          animation="wave"
          style={{ marginTop: '20px', marginLeft: '30px', width: 200, height: 19 }}
        />
        <Skeleton
          animation="wave"
          style={{ marginTop: '33px', marginLeft: '30px', width: 190, height: 18 }}
        />
        <Skeleton
          animation="wave"
          style={{ marginTop: '5px', marginLeft: '30px', width: 190, height: 18 }}
        />
      </div>

    </div>


  </Card>
}
