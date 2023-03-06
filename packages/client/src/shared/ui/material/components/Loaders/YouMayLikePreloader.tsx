import { Card, Skeleton } from '@mui/material'
import { FC } from 'react'
import { Map } from 'shared/lib/components'


export const YouMayLikePreloader: FC = () => {
  return <Map count={4}>
    <Card sx={{ height: '75px', width: '70%', m: 2, borderRadius: '6px',
      display: 'flex', padding: '14px', position: 'relative' }}>
      <Skeleton
        animation="wave"
        style={{ marginBottom: '30px', marginLeft: '-6px', width: 57, height: 100, marginTop:
                '-33px' }}
      />
      <div>
        <Skeleton
          animation="wave"
          style={{ marginTop: '-10px', marginLeft: '10px', width: 100, height: 14 }}
        />
        <Skeleton
          animation="wave"
          style={{ marginTop: '4px', marginLeft: '10px', width: 100, height: 14 }}
        />
      </div>
    </Card>
  </Map>
}

