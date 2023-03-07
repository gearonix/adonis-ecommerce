import { FC } from 'react'
import s from './style.module.scss'
import { NextImage } from 'shared/ui/kit'
import { DefaultAssets } from 'shared/config/consts/assets'

export interface ImageCarouselProps{
  files: string[],
  onSelect: (idx: number) => void
}

const ImageCarousel: FC<ImageCarouselProps> = ({ files, onSelect }) => {
  return <div className={s.image_carousel}>
    {files.map((url: string, idx) => {
      return <div className={s.image_carousel_wrapper} key={idx} onClick={() => onSelect(idx)}>
        <NextImage src={url} def={DefaultAssets.PRODUCT}/>
      </div>
    })}
  </div>
}


export default ImageCarousel
