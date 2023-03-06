import { CFC } from 'shared/types/components'


export const Display : CFC<{when: any}> = ({ when, children }) => {
  return Boolean(when) ? children : null
}

export const Map: CFC<{count : number}> = ({ count, children }) => {
  const generateArray = (count: number) => {
    return Array.from(Array(count).keys())
  }
  return <>
    {generateArray(count).map(() => children)}
  </>
}


export const Ternary: CFC<{where: any}> = ({ where, children }) => {
  const [first, second] = children
  return where ? first : second
}
