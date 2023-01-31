import {FC} from 'react'
import {NextImageProps} from "./types";
import Image from "next/image";

export const NextImage: FC<NextImageProps> = ({src, alt = ''}) => {
    return <Image src={src} alt={alt} fill
                  priority={true} sizes={'100%, 100%'}/>
}

