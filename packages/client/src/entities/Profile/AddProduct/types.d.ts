import {ReactElement} from "react";

export interface AddProductProps {
    cancel: () => void,
    submitForm: () => void,
    ProductImages: ReactElement
}
