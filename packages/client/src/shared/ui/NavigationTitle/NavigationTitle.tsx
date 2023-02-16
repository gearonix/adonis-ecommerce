import {FC, ReactNode} from 'react';
import s from './style.module.scss';

export const NavigationTitle: FC<{ children: ReactNode }> = ({children}) => {
  return <h2 className={s.search_head}>{children}</h2>;
};

