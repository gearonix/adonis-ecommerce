import {FC} from 'react';
import s from './style.module.scss'
import {MuiTable} from "mui";
import {BlueLinkHeader} from 'shared/ui';
import Advantage from "shared/ui/Advantage/ui/Advantage";

const ProductDescription: FC = () => {
    return <div className={s.product_params}>
        <BlueLinkHeader/>
        <div className={s.wrapper}>
            <div className={s.description}>
                Lorem ipsum dolor sit amet, consectetur
                adipisicing elit, sed do eiusmod tempor i
                ncididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis au
                te irure dolor in reprehenderit in volupta
                te velit esse cillum dolore eu fugiat n
                ulla pariatur. Lorem ipsum dolor sit
                amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam,
                Quis nostrud exercitation ullamco labor
                is nisi ut aliquip ex ea commodo conseq
                uat. Duis aute irure dolor in reprehenderit
                in voluptate velit esse cillum dolore eu
                ugiat nulla pariatur.
            </div>
            <MuiTable/>
            <Advantage/>
            <Advantage/>
            <Advantage/>
        </div>
    </div>
}

export default ProductDescription
