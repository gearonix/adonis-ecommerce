import {FC, ReactNode} from 'react';
import s from './style.module.scss';
import {HoverLink} from 'shared/ui';

export const BlueLink: FC<{ children: ReactNode }> = ({children}) => {
    return <div className={s.link}>
        <HoverLink>{children}</HoverLink>
    </div>;
};

