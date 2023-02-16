import {FC, ReactNode} from 'react';
import {Preloader} from 'shared/ui';
import {useRedirect} from './hooks/useRedirect';

const AuthGuard: FC<{ children: ReactNode }> = ({children}) => {
  const isLoading = useRedirect();

  return <>
    {isLoading ? children : <Preloader/>}
  </>;
};

export default AuthGuard;
