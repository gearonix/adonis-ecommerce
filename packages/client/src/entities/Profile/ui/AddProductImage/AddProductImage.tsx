import { FC, memo, useState } from 'react'
import s from './style.module.scss'
import { NextImage } from 'shared/ui/kit'
import { ImageCarouselProps } from 'features/ProductPage'
import { DefaultAssets } from 'shared/config/consts/assets'

interface ProductImageProps{
  ImageCarousel: FC<ImageCarouselProps>,
  files: string[]
}


const AddProductImage = memo<ProductImageProps>(({ ImageCarousel, files }) => {
  const [index, setIndex] = useState<number>(-1)

  return <>
    <div className={s.product_images}>
      <div className={s.image_wrapper}>
        <NextImage src={files?.[index]} def={DefaultAssets.PRODUCT}/>
      </div>
      <ImageCarousel files={files} onSelect={(idx: number) => {
        setIndex(idx)
      }}/>
    </div>
  </>
})

export default AddProductImage
