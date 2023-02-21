import {FC, useState} from 'react'
import s from './style.module.scss'
import {ImageModal} from 'shared/ui/mui'
import {NextImage} from 'shared/ui/kit'
import {ImageCarouselProps} from 'features/ProductPage/ImageCarousel'

interface ProductImageProps{
  ImageCarousel: FC<ImageCarouselProps>,
  files: string[]
}


const ProductImage: FC<ProductImageProps> = ({ImageCarousel, files}) => {
  const [isModalOpened, openModal] = useState<boolean>(false)
  const [index, setIndex] = useState<number>(0)

  return <><ImageModal isOpen={isModalOpened} close={openModal} image={files[index]}/>
    <div className={s.product_images}>
      <div className={s.image_wrapper} onClick={() => openModal(true)}>
        <NextImage src={files[index]} />
      </div>
      <ImageCarousel files={files} onSelect={(idx: number) => setIndex(idx)}/>
    </div>
  </>
}

export default ProductImage
