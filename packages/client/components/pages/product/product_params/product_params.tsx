import s from './product_params.module.scss'
import {MuiTable} from "components/UIkit/mui/mui_components";
import {AiOutlineCheck, MdOutlineDescription} from 'icons'

const ProductParams = () => {
    return <div className={s.product_params}>
        <div className={s.header}>
            <h4><MdOutlineDescription/> Product description</h4>
        </div>
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
            <h4 className={s.advantage}>
                <AiOutlineCheck/> Some great feature name here
            </h4>
            <h4 className={s.advantage}>
                <AiOutlineCheck/> Some great feature name here
            </h4>
            <h4 className={s.advantage}>
                <AiOutlineCheck/> Some great feature name here
            </h4>
        </div>
    </div>
}

export default ProductParams
