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
  burgerMenu: () => ({
    from: {
      x: -550
    },
    to: {
      x: 0
    }
  }),
  partialOpacity: () => ({
    from: {
      opacity: 0
    },
    to: {
      opacity: 0.6
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
