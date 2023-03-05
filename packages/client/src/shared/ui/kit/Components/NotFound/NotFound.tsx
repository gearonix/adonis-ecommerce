import { FC } from 'react'
import { CFC } from 'shared/types/components'
import s from './style.module.scss'
import { CiWarning } from 'react-icons/ci'
import Link from 'next/link'
import { routes } from 'shared/config/routes'
import cn from 'classnames'

interface NotFoundUIProps{
    title: string,
    Icon: FC,
    w?: number
}
interface NotFoundProps extends NotFoundUIProps{
    show: any
}


export const NotFound : CFC<NotFoundProps> = ({ show, children, ...props }) => {
  console.log(props.w)
  return Boolean(show) ? children : <NotFoundUI {...props}/>
}


const NotFoundUI: FC<NotFoundUIProps> = ({ title, Icon, w = 74 }) => {
  return <div className={s.container} style={{ width: `${w}%` }}>
    <h1 className={s.title}><Icon/> {title} is not found</h1>
    <p className={s.text}>Try to make a
        request differently.</p>
    <div className={s.image_wrapper}>
      <CiWarning/>
    </div>
    <Link href={routes.MAIN}>
      <h4 className={cn(s.link, 'hover_link')}>
              Return to the main page.
      </h4>
    </Link>
  </div>
}

