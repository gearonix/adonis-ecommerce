import {ColorType, HexColorsI} from "../types";
import {hexColors} from "../consts";
import {useEffect, useState} from "react";

export const useColor = (color: ColorType): HexColorsI['primary'] => {
    return hexColors[color]
}

export const useAdaptive = (px: number = 880) => {
    const [isMobile, setIsMobile] = useState<boolean>(false)
    useEffect(() => {
        setIsMobile(window.innerWidth < px)
    }, [])
    return isMobile
}
