import {UseFormReturn} from "react-hook-form";

export const createFieldValues = ({register, formState}: UseFormReturn<any>) => (name: string) => {

    return {
        inputProps: register(name),
        error: formState.errors[name]?.message
    }
}
