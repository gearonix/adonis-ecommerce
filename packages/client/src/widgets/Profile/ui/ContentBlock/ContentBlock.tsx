import {FC, ReactNode} from 'react';
import s from './style.module.scss';

const ContentBlock: FC<{ children: ReactNode }> = ({children}) => {
  return <div className={s.content_block}>
    {children}
  </div>;
};

export default ContentBlock;
