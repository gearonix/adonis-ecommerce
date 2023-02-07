import {ColorType, HexColorsI} from '../ui/types';
import {hexColors} from '../ui/consts';
import {useEffect, useState} from 'react';

export const useColor = (color: ColorType): HexColorsI['primary'] => {
    return hexColors[color];
};

export const useAdaptive = (px: number = 880) => {
    const [isMobile, setIsMobile] = useState<boolean>(false);
    useEffect(() => {
        setIsMobile(window.innerWidth < px);
    }, []);
    return isMobile;
};

export const useTimeout = (timing = 1800) => {
    const [isShow, setShow] = useState<boolean>(false);

    useEffect(() => {
        const timeout = setTimeout(() => setShow(true), timing);
        return () => clearTimeout(timeout);
    }, []);

    return isShow;
};
