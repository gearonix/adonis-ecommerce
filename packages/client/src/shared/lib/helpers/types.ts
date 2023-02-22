import {Nullable, ObjectOptional} from 'shared/types/common'

export interface IHelpers {
    getNameFromEmail(email: string): string

    capitalize(str: string): string,

    attachStrings(...args: string[]): string,

    differenceBetweenObjects<T extends Object>(initialObject: T, changedObject: T): Nullable<ObjectOptional<T>>

    isObjectEmpty(obj: any): boolean,
    reformatMysqlDate(date: string): string,
    onlyDefinedValues<T extends Object>(obj: T): Nullable<Partial<T>>
    objectToQuery<T extends Object>(obj: T): string
}

