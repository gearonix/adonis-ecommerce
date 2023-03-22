import { FC, forwardRef } from 'react'
import { animated, useSpring } from '@react-spring/web'
import springs from 'shared/lib/components/animations/config/springs'
import { WithSpringProps } from '../../types'


const WithSpring = forwardRef<any, WithSpringProps>((props, ref) => {
  const { className, children, type = 'opacity',
    param, style, onClick } = props
  const spring = useSpring(springs[type](param))
  return <animated.div className={className} style={{ ...spring, ...style }}
    onClick={onClick} ref={ref}>
    {children}
  </animated.div>
})

export default WithSpring
