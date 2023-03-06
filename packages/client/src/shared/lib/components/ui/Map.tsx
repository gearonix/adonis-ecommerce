import { CFC } from 'shared/types/components'

interface MapProps{
    count: number
}

const generateArray = (count: number) => {
  return Array.from(Array(count).keys())
}


const Map : CFC<MapProps> = ({ count, children }) => {
  return <>
    {generateArray(count).map(() => children)}
  </>
}


export default Map
