import { FC, SyntheticEvent, useEffect, useState } from 'react'
import Image, { ImageProps } from 'next/image'
import { Nullable } from 'shared/types/common'
import { WithSpring } from 'shared/lib/components'

// @ts-ignore
interface NextImageProps extends ImageProps {
  alt?: string
  def?: string,
  src: Nullable<string>
}


export const NextImage: FC<NextImageProps> = ({ src: initialSrc, alt = '',
  onClick = () => {}, def: defaultSrc, ...props }) => {
  const [src, setSrc] = useState(initialSrc || defaultSrc)

  useEffect(() => {
    setSrc(initialSrc || defaultSrc)
  }, [initialSrc])


  const onError = (e: SyntheticEvent<HTMLImageElement>) => {
    if (defaultSrc) {
      setSrc(defaultSrc)
    }
    props.onError?.(e)
  }

  return <WithSpring key={src}>
    <Image src={src as string} alt={alt} fill
      priority={true} sizes={'100%, 100%'} onClick={onClick} {...props}
      onError={onError}/>
  </WithSpring>
}

