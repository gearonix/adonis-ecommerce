import { FC, ReactNode } from 'react'

// Children functional component
export type CFC<T = {}> = FC<{ children: any } & T>
