import {ColorType, HexColorsI} from "../types";
import {hexColors} from "../consts";

export const useColor = (color: ColorType): HexColorsI['primary'] => {
    return hexColors[color]
}
