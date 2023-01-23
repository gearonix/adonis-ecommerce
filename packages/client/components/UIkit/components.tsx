import {FC} from "react";
import {NextImageProps} from "./components.types";
import Image from "next/image";

export const NextImage: FC<NextImageProps> = ({src, alt = ''}) => {
    return <Image src={src} alt={alt} objectFit={'cover'} layout={'fill'}/>
}
