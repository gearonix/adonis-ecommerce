import {FC, ReactNode} from 'react';

const SelectUser: FC<{ children: ReactNode }> = ({children}) => {
  return <div>
    {children}
  </div>;
};

export default SelectUser;
