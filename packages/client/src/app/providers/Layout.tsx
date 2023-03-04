import { FC, ReactNode } from 'react'
import { Inter } from '@next/font/google'
import DevNavRouting from '../../../dev/components/nav_routing'
import { Header } from 'widgets/Header'
import cn from 'classnames'
import { useTheme } from 'shared/lib/hooks/useTheme'
import { Footer } from 'entities/Others'

const interFont = Inter({ subsets: ['latin'] })

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const { theme } = useTheme()

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
