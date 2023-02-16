import {FC, ReactNode} from 'react';
import s from './style.module.scss';


export const ContainerTitle: FC<{ children: ReactNode }> = ({children}) => {
  return <h2 className={s.title}>{children}</h2>;
};

