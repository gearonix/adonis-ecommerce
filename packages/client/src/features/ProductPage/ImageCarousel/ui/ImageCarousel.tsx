import {FC} from 'react';
import s from './style.module.scss';
import {NextImage} from 'shared/ui';

const ImageCarousel: FC = () => {
  return <div className={s.image_carousel}>
    <div className={s.image_carousel_wrapper}>
      <NextImage src={'/mock_item.svg'}/>
    </div>
    <div className={s.image_carousel_wrapper}>
      <NextImage src={'/mock_item.svg'}/>
    </div>
  </div>;
};


export default ImageCarousel;
