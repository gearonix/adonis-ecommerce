import { FC, ReactNode } from 'react'

// Children functional component
export type CWC<T = {}> = FC<{ children: ReactNode } & T>
