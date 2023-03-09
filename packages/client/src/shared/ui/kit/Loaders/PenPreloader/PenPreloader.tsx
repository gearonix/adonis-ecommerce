import { FC } from 'react'
import s from './style.module.scss'
import { useTimeout } from 'shared/lib/hooks/useTimeout'
import { WithSpring } from 'shared/lib/components'

export const PenPreloader: FC<{instantly?: boolean}> = ({ instantly }) => {
  const showPen = useTimeout(instantly ? 200 : 1800)

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
