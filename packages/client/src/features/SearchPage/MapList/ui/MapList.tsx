import {FC} from 'react'


export interface RecommendedListProps {
  values: any[],
  Item: FC
}


const MapList: FC<RecommendedListProps> = ({values, Item}) => {
  return <>
    {values.map((item) => {
      return <Item key={item}/>
    })}
  </>
}

export default MapList
