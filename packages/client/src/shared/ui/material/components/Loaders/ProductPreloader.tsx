import { Card, Skeleton } from '@mui/material'
import { FC } from 'react'
import { Map } from 'shared/lib/components'


export const ProductPreloader: FC = () => {
  return <Card sx={{ width: '100%', height: 600, margin: '0 auto' }}>

    <div style={{ display: 'flex' }}>

      <Skeleton
        animation="wave"
        style={{ width: 400, height: 600, borderRadius: '6px', marginLeft: 20, marginTop: -100 }}
      />
      <Map count={2}>
        <Typos times={3}/>
      </Map>
    </div>
  </Card>
}

const Typos: FC<{times: number}> = ({ times }) => {
  return <div>
    <Map count={times}>
      <Skeleton
        animation="wave"
        style={{ marginTop: '50px', marginLeft: '30px', width: 240, height: 19 }}
      />
      <Skeleton
        animation="wave"
        style={{ marginTop: '33px', marginLeft: '30px', width: 240, height: 18 }}
      />
      <Skeleton
        animation="wave"
        style={{ marginTop: '5px', marginLeft: '30px', width: 240, height: 18 }}
      />
    </Map>
  </div>
}
