import { CFC } from 'shared/types/components'
import s from './style.module.scss'


const ContentBlock: CFC = ({ children }) => {
  return <div className={s.content_block}>
    {children}
  </div>
}

export default ContentBlock
