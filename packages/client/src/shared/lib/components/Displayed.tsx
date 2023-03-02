import {WC} from 'shared/types/components'
import {FC} from 'react'

interface DisplayedProps{
    condition: boolean | null | string | undefined | FC<any>
}


const Displayed : WC<DisplayedProps> = ({condition, children}) => {
  return condition ? children : null
}

export default Displayed
