import s from './style.module.scss'
import { WithSpring } from 'shared/lib/components'
import { CFC } from 'shared/types/components'

export const Page: CFC = ({ children }) => {
  return <WithSpring className={s.page}>
    {children}
  </WithSpring>
}

export default Page
