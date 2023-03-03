import { FC } from 'react'

// Component withHelpers children
export type WC<T = {}> = FC<{ children: any } & T>
