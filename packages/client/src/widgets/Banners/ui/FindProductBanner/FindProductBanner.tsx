import { FC } from 'react'
import { SearchProductForm } from 'features/SearchPage'
import { FindProductBanner as FindProductSkeleton } from 'entities/Banners'

const FindProductBanner: FC = () => {
  return <FindProductSkeleton Form={SearchProductForm}/>
}

export default FindProductBanner
