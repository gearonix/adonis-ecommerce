import {ColorType, HexColorsI} from "../main";
import {hexColors} from "../consts";

export const useColor = (color: ColorType): HexColorsI['primary'] => {
    return hexColors[color]
}
