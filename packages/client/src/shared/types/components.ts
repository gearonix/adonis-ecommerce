// Component with children
import {FC, ReactNode} from 'react'

export type CWC<T = {}> = FC<{children: ReactNode} & T>
