import { Card, CardHeader, CardContent, Skeleton } from '@mui/material'
import { FC } from 'react'
import { Map } from 'shared/lib/components'


export const RecommendedPreloader: FC = () => {
  return <Map count={8}>
    <Card>
      <div style={{ display: 'flex', width: '100%', height: '100%' }}>
        <Skeleton
          animation="wave"
          height="110%"
          width="105px"
          style={{ borderRadius: '12px', marginTop: -20, marginLeft: '10px' }}
        />

        <div>
          <Skeleton
            animation="wave"
            style={{ marginTop: '14px', marginLeft: '10px', width: 130, height: 14 }}
          />
          <Skeleton
            animation="wave"
            style={{ marginTop: '24px', marginLeft: '10px', width: 130, height: 11 }}
          />
          <Skeleton
            animation="wave"
            style={{ marginTop: '4px', marginLeft: '10px', width: 130, height: 11 }}
          />
        </div>

      </div>

    </Card>
  </Map>
}

