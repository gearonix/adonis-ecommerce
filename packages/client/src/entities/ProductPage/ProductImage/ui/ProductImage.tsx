import {FC, useState} from 'react'
import s from './style.module.scss'
import {ImageModal} from 'shared/ui/mui'
import {NextImage} from 'shared/ui/kit'

const ProductImage: FC<{ ImageCarousel: FC }> = ({ImageCarousel}) => {
  const [isModalOpened, openModal] = useState<boolean>(false)
  return <><ImageModal isOpen={isModalOpened} close={openModal} image={'/mock_item.svg'}/>
    <div className={s.product_images}>
      <div className={s.image_wrapper} onClick={() => openModal(true)}>
        <NextImage src={'/assets/dev/mock_item.svg'}/>
      </div>
      <ImageCarousel/>
    </div>
  </>
}

export default ProductImage
