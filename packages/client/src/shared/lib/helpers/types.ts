import {createFieldValues} from 'shared/lib/helpers/others'
import {Nullable, ObjectOptional} from 'shared/types/common'

export interface IHelpers {
    getNameFromEmail(email: string): string,

    capitalize(str: string): string,

    attachStrings(...args: string[]): string,

    differenceBetweenObjects<T extends Object>(initialObject: T, changedObject: T): Nullable<ObjectOptional<T>>

    isObjectEmpty(obj: any): boolean
}

export type CreateFieldValues = ReturnType<typeof createFieldValues>
