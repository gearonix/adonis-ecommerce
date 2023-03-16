import { FC, ReactNode } from 'react'
import { Inter } from 'next/font/google'
import { DevNavigation } from 'dev/components'
import { Header } from 'widgets/Header'
import cn from 'classnames'
import { useTheme } from 'shared/lib/hooks/useTheme'
import { Footer } from 'entities/Others'
import { WithNotifications } from 'app/providers/Notifications'

const interFont = Inter({ subsets: ['latin'] })

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const { theme } = useTheme()

  return <div className={cn(interFont.className, theme, 'layout')}>
    {/* middlewares*/}
    <DevNavigation/>

    <Header/>
    <div className="container">
      {children}
    </div>
    <Footer/>
  </div>
}

export default Layout
