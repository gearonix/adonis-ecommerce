import { Springs } from '../types'

const springs: Springs = {
  opacity: () => ({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    }
  }),
  opacityHeight: (height) => ({
    from: {
      opacity: 0,
      height: 0
    },
    to: {
      opacity: 1,
      height
    }
  }),
  opacityScale: () => ({
    from: {
      scale: 0,
      opacity: 0
    },
    to: {
      scale: 1,
      opacity: 1
    }
  })
}


export default springs
