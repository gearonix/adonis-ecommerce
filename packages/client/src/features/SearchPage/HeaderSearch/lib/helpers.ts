import {KeyboardEvent} from 'react'

export const onEnter = (callback: (...args: any[]) => any) => (e: KeyboardEvent<HTMLInputElement>) => {
  if (e.key === 'Enter') {
    callback(e)
  }
}

