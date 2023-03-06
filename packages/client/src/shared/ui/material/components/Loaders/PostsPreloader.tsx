import { Card, CardHeader, CardContent, Skeleton } from '@mui/material'
import { FC } from 'react'


export const PostsPreloader: FC = () => {
  return <Card sx={{ maxWidth: 700, m: 2 }}>
    <CardHeader
      avatar={
        <Skeleton animation="wave" variant="circular" width={60} height={60} />
      }
      title={
        <Skeleton
          animation="wave"
          height={10}
          width="80%"
          style={{ marginBottom: 6 }}
        />
      }
      subheader={
        <Skeleton animation="wave" height={10} width="40%" />
      }
    />
    <Skeleton sx={{ height: 260 }} animation="wave" variant="rectangular" />
    <CardContent>
      <>
        <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
        <Skeleton animation="wave" height={10} width="80%" />
      </>
    </CardContent>
  </Card>
}

