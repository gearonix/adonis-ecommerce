import {forwardRef} from 'react';
import {Button} from "shared/ui";

const RemoveFromCard = forwardRef<HTMLButtonElement>((props, ref) => {
    return <Button w={'114px'} color={'redColored'} h={'32px'} ref={ref}>Remove</Button>
})

export default RemoveFromCard
