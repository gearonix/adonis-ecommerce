import { CallbackSprings } from '../types'

const callbackSprings: CallbackSprings = {
  reverseScale: () => [{ scale: 1 }, [{ scale: 0 }, { scale: 1, config: { friction: 12 } }]],
  reduceLength: (height) => [{ height }, [{ height: 0 }]],
  increaseSize: () => [{ scale: 1 }, [{ scale: 1.08, duration: 50 }, { scale: 1 }], { duration: 100 }],
  opacityTwice: () => [{ opacity: 0 }, [{ opacity: 1 }, { opacity: 0 }]],

}

export default callbackSprings
