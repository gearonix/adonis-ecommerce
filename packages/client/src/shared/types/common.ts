import { AxiosResponse as AxiosRes } from 'axios'

export type Nullable<T> = null | T

export type ObjectNullable<T> = { [K in keyof T]: T[K] | null }

export type DeepNullable<T> = {
    [K in keyof T]: DeepNullable<T[K]> | null;
};

export type AxiosResponse<T> = Promise<AxiosRes<T>>

export type ValueOf<T> = T[keyof T];

// remove it
export type KeyOf<T> = T[any]

export type Required<T> = {
    [P in keyof T]-?: T[P];
};
