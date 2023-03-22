import { FC, ReactNode } from 'react'
import { Inter } from 'next/font/google'
import { DevNavigation } from 'dev/components'
import { Header } from 'widgets/Header'
import cn from 'classnames'
import { useTheme } from 'shared/lib/hooks/useTheme'
import { BottomNavigation, Footer } from 'entities/Others'
import { WithNotifications } from 'app/providers/Notifications'
import 'dayjs/locale/ru'

const interFont = Inter({ subsets: ['latin'] })

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const { theme } = useTheme()

  return <div className={cn(theme, 'layout', interFont.className)}>
    {/* middlewares*/}
    <DevNavigation/>
    <WithNotifications/>

    <Header/>
    <div className="container">
      {children}
    </div>
    <Footer/>
  </div>
}

export default Layout