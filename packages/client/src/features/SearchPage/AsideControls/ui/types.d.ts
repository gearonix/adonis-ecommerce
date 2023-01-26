import {FC} from "react";
import {ControlsProps} from "shared/lib/mui/types";

export interface CategoryProps {
    items: string[],
    title: string,
    Component: FC<ControlsProps>
}
