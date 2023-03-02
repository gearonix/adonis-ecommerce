import {FC} from 'react'
import s from './style.module.scss'
import {WithSpring} from 'shared/ui/animations'
import {useTimeout} from 'shared/lib/hooks/shared'

export const Preloader: FC = () => {
  const showPen = useTimeout()

  return <div className={s.preloader}>
    {showPen && <PenAnimation/>}
  </div>
}

const PenAnimation = () => {
  return <WithSpring className={s.container}>
    <div className={s.line}>
      <div className={s.pen}>
        <div className={s.pen_overlay}/>
        <div className={s.pen_top}/>
        <div className={s.pen_bottom}/>
      </div>
    </div>
    <p className={s.text}>Page is Loading... Please Wait</p>
  </WithSpring>
}
