import {FC} from 'react';
import Image from 'next/image';
import {NextImageProps} from "./types";

export const NextImage: FC<NextImageProps> = ({src, alt = ''}) => {


    return <Image src={src} alt={alt} fill
                  priority={true} sizes={'100%, 100%'}/>;
};

