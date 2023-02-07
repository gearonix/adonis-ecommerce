import {FC} from 'react';
import s from './style.module.scss';
import {AiOutlineCheck} from 'icons';

const Advantage: FC = () => {
    return <h4 className={s.advantage}>
        <AiOutlineCheck/> Some great feature name here
    </h4>;
};

export default Advantage;
