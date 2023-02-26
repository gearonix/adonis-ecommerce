import {FC, useEffect} from 'react'
import {animated, useSpring} from '@react-spring/web'
import {ApiAnimationProps} from '../../types'
import callbackSprings from '../../config/callbackSprings'

const ApiAnimation: FC<ApiAnimationProps> = ({className, children, onClick, type, param, subscriber, subscriberValue}) => {
  const [from, to, config] = callbackSprings[type](param)
  const [styles, api] = useSpring(() => from)

  useEffect(() => {
    if (subscriber) {
      subscriber.current?.addEventListener('click', handler)
    }
  }, [subscriber])
  const handler = () => {
    api.start({from, to, config})
    onClick?.()
  }
  useEffect(() => {
    if (subscriberValue) {
      handler()
    }
  }, [subscriberValue])


  return <animated.div className={className} style={styles} onClick={!subscriber ? handler : () => {
  }}>
    {children}
  </animated.div>
}

export default ApiAnimation
