import { FC, memo } from 'react'
import { AiOutlineSearch } from 'shared/ui/icons'

const SearchMessages: FC = memo(() => {
  return <div>
    <AiOutlineSearch color={'#8B96A5'} size={'24px'}/>
  </div>
})

export default SearchMessages
