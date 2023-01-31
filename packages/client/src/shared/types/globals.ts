export enum Roles {
    SALESMAN = 'SALESMAN',
    CUSTOMER = 'CUSTOMER'
}

export type Nullable<T> = null | T

export type ObjectNullable<T> = { [K in keyof T]: T[K] | null }
