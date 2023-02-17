import {FC} from 'react'
import Image, {ImageProps} from 'next/image'

// @ts-ignore
interface NextImageProps extends ImageProps {
  alt?: string
}


export const NextImage: FC<NextImageProps> = ({src, alt = '', onClick = () => {}}) => {
  return <Image src={src} alt={alt} fill
    priority={true} sizes={'100%, 100%'} onClick={onClick}/>
}

