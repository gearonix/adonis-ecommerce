import {FC} from 'react';
import {Button} from "shared/ui";
import {ApiAnimation} from "shared/lib/animations";

const AddToSavedCart: FC = () => {
    return <ApiAnimation type={'increaseSize'}>
        <Button w={'114px'} h={'32px'} color={'blueBordered'}>Save for later</Button>
    </ApiAnimation>
}

export default AddToSavedCart
