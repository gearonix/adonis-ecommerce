import { FC, memo } from 'react'
import s from './style.module.scss'
import { NextImage } from 'shared/ui/kit'
import { DefaultAssets } from 'shared/config/consts/assets'
import { Display } from 'shared/lib/components'

export interface ImageCarouselProps{
  files: string[],
  onSelect: (idx: number) => void
}

const ImageCarousel = memo<ImageCarouselProps>(({ files, onSelect }) => {
  return <Display when={files.length}>
    <div className={s.image_carousel}>
      {files.map((url: string, idx) => {
        return <div className={s.image_carousel_wrapper} key={idx} onClick={() => onSelect(idx)}>
          <NextImage src={url} def={DefaultAssets.PRODUCT}/>
        </div>
      })}
    </div>
  </Display>
})


export default ImageCarousel
