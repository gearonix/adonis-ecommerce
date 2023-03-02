import {FC, ReactNode} from 'react'
import {Inter} from '@next/font/google'
import DevNavRouting from '../../../dev/nav_routing'
import {Header} from 'widgets/Header'
import {Footer} from 'entities/Others/Layout/Footer'
import {useTheme} from 'shared/lib/hooks/common'
import cn from 'classnames'

const interFont = Inter({subsets: ['latin']})

const Layout: FC<{ children: ReactNode }> = ({children}) => {
  const {theme} = useTheme()

  return <div className={cn(interFont.className, theme, 'layout')}>
    <DevNavRouting/>
    <Header/>
    <div className="container">
      {children}
    </div>
    <Footer/>
  </div>
}

export default Layout
