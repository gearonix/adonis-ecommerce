import { FC, SyntheticEvent, useState } from 'react'
import Image, { ImageProps } from 'next/image'
import { Nullable } from 'shared/types/common'

// @ts-ignore
interface NextImageProps extends ImageProps {
  alt?: string
  def?: string,
  src: Nullable<string>
}


export const NextImage: FC<NextImageProps> = ({ src: initialSrc, alt = '',
  onClick = () => {}, def: defaultSrc, ...props }) => {
  const [src, setSrc] = useState(initialSrc || defaultSrc)

  const onError = (e: SyntheticEvent<HTMLImageElement>) => {
    if (defaultSrc) {
      setSrc(defaultSrc)
    }
    props.onError?.(e)
  }

  return <Image src={src as string} alt={alt} fill
    priority={true} sizes={'100%, 100%'} onClick={onClick} {...props}
    onError={onError}/>
}

