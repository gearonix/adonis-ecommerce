import {FC, ReactNode} from 'react';
import Header from './header/header';
import {Inter} from '@next/font/google'
import Footer from './footer/footer';
import DevNavRouting from 'components/dev/nav_routing';

const interFont = Inter({subsets: ['latin']})

const Layout: FC<{ children: ReactNode }> = ({children}) => {
    return <div className={interFont.className}>
        <DevNavRouting/>
        <Header/>
        <div className="container">
            {children}
        </div>
        <Footer/>
    </div>
}

export default Layout
