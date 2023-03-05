import { CFC } from 'shared/types/components'
import { FC } from 'react'

interface DisplayedProps{
    condition: any
}


const Displayed : CFC<DisplayedProps> = ({ condition, children }) => {
  return Boolean(condition) ? children : null
}

export default Displayed
