import {FC, useState} from 'react'
import s from './style.module.scss'
import {NextImage} from 'shared/ui/kit'
import {ImageCarouselProps} from 'features/ProductPage/ImageCarousel'
import {DefaultAssets} from 'shared/config/assets'

interface ProductImageProps{
  ImageCarousel: FC<ImageCarouselProps>,
  files: string[]
}


const ProductImage: FC<ProductImageProps> = ({ImageCarousel, files}) => {
  const [index, setIndex] = useState<number>(0)

  return <>
    <div className={s.product_images}>
      <div className={s.image_wrapper}>
        <NextImage src={files[index]} def={DefaultAssets.PRODUCT}/>
      </div>
      <ImageCarousel files={files} onSelect={(idx: number) => setIndex(idx)}/>
    </div>
  </>
}

export default ProductImage
