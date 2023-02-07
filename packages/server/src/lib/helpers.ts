import * as uuid from 'uuid'
import {ValidationError} from 'class-validator'

export const generateId = () => uuid.v4().slice(0, 8)

export const reformatErrors = (errors: ValidationError[]) => {
    return {
        message: errors.map(err => {
                return {
                    [err.property]: Object.values(err.constraints).join(', ')
                }
            }
        )
    }
}
