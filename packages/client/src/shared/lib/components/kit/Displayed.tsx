import { CWC } from 'shared/types/components'
import { FC } from 'react'

interface DisplayedProps{
    condition: boolean | null | string | undefined | FC<any>
}


const Displayed : CWC<DisplayedProps> = ({ condition, children }) => {
  return condition ? children : null
}

export default Displayed
