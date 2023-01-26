import {ColorType} from "../../main";
import {ReactNode} from "react";

interface ButtonProps {
    children: ReactNode,
    color?: ColorType,
    w: number | string,
    h?: number | string
}
