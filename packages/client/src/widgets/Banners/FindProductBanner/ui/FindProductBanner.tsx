import {FC} from 'react';
import {FindProductSkeleton} from 'entities/Banners/FindProductBanner';
import {SearchProductForm} from 'features/SearchPage/SearchProductForm';

const FindProductBanner: FC = () => {
  return <FindProductSkeleton Form={SearchProductForm}/>;
};

export default FindProductBanner;
