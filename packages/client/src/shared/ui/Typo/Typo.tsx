import {FC, ReactNode} from 'react';
import s from './style.module.scss';

const Typo: FC<{ children: ReactNode, grey?: boolean }> = ({children, grey}) => {
    return <h4 className={!grey ? s.typo : s.typo_grey} style={{marginBottom: 5}}>{children}</h4>;
};

export default Typo;
