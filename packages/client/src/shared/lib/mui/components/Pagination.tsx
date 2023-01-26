import {FC} from "react";
import {Pagination} from "@mui/material";

export const MuiPagination: FC = () => {
    return <Pagination count={10} variant="outlined" shape="rounded" sx={{
        position: 'absolute',
        right: 0, bottom: 0
    }}/>
}
