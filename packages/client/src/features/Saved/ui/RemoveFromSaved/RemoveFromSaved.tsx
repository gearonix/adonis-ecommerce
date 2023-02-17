import {forwardRef} from 'react'
import {Button} from 'shared/ui/kit'

const RemoveFromSaved = forwardRef<HTMLButtonElement>((props, ref) => {
  return <Button w={'114px'} color={'redColored'} h={'32px'} ref={ref}>Remove</Button>
})

RemoveFromSaved.displayName = 'RemoveFromSaved'

export default RemoveFromSaved
