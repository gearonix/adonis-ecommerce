import {FC, ReactNode} from 'react';
import {Inter} from '@next/font/google';
import DevNavRouting from '../../../dev/nav_routing';
import {Header} from 'widgets/Header';
import {Footer} from 'entities/Others/Layout/Footer';

const interFont = Inter({subsets: ['latin']});
const Layout: FC<{ children: ReactNode }> = ({children}) => {
  return <div className={interFont.className}>
    <DevNavRouting/>
    <Header/>
    <div className="container">
      {children}
    </div>
    <Footer/>
  </div>;
};

export default Layout;
