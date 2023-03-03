import { FC, SyntheticEvent, useState } from 'react'
import Image, { ImageProps } from 'next/image'

// @ts-ignore
interface NextImageProps extends ImageProps {
  alt?: string
  def?: string
}


export const NextImage: FC<NextImageProps> = ({ src: initialSrc, alt = '',
  onClick = () => {}, def: defaultSrc, ...props }) => {
  const [src, setSrc] = useState(initialSrc)

  const onError = (e: SyntheticEvent<HTMLImageElement>) => {
    if (defaultSrc) {
      setSrc(defaultSrc)
    }
    props.onError?.(e)
  }

  return initialSrc ? <Image src={src} alt={alt} fill
    priority={true} sizes={'100%, 100%'} onClick={onClick} {...props}
    onError={onError}/> : null
}

