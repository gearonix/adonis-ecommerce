import { Card, Skeleton } from '@mui/material'
import { FC } from 'react'
import { Map } from 'shared/lib/components'


export const GridPreloader: FC = () => {
  return <Map count={8}>
    <Card>
      <div style={{ padding: '10px', width: '100%', height: '100%' }}>
        <Skeleton
          animation="wave"
          height="110%"
          width="190px"
          style={{ margin: '0 auto', marginTop: -70, marginLeft: 8 }}
        />
        <Skeleton
          animation="wave"
          style={{ marginTop: '-50px', marginLeft: '10px', width: 130, height: 14 }}
        />
        <Skeleton
          animation="wave"
          style={{ marginTop: '5px', marginLeft: '10px', width: 130, height: 14 }}
        />
      </div>

    </Card>
  </Map>
}

