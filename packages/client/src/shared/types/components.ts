import {FC, ReactNode} from 'react'

// Component with children
export type WC<T = {}> = FC<{ children: any } & T>
