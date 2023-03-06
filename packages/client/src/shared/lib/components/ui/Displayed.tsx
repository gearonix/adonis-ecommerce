import { CFC } from 'shared/types/components'
import { FC } from 'react'

interface DisplayedProps{
    when: any
}


const Displayed : CFC<DisplayedProps> = ({ when, children }) => {
  return Boolean(when) ? children : null
}

export default Displayed
