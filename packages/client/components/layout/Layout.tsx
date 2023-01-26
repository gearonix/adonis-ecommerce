import {FC, ReactNode} from 'react';
import {Inter} from '@next/font/google'
import DevNavRouting from 'components/dev/nav_routing';
import {Header} from 'src/widgets/Header';
import {Footer} from 'src/entities/Layout/Footer';

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
