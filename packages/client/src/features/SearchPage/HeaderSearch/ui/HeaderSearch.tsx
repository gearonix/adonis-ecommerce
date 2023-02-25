import {FC} from 'react'
import s from './style.module.scss'
import {Button} from 'shared/ui/kit'
import {useForm} from 'shared/lib/helpers/hooks/common'
import {searchDefaultValues} from '../lib/defaultValues'
import {useRouter} from 'next/router'
import {routes} from 'shared/config/routes'
import {Helpers} from 'shared/lib/helpers/others'
import {onEnter} from 'features/SearchPage/HeaderSearch/lib/helpers'

interface SearchForm{
    search: string,
}

const helpers = new Helpers()

const HeaderSearch: FC = () => {
  const {reg, submit} = useForm<SearchForm>(null, searchDefaultValues)
  const router = useRouter()

  const onSearch = ({search}: SearchForm) => {
    const query = {
      query: {
        search: helpers.strToUndefined(search),
      },
    }

    router.push({
      pathname: routes.SEARCH,
      ...helpers.partial(query),
    })
  }


  return <div className={s.search}>
    <input className={s.search_input} placeholder={'Search'} {...reg('search').inputProps}
      onKeyDown={onEnter(submit(onSearch))}/>
    <Button w={'90px'} onClick={submit(onSearch)}>
                Search
    </Button>
  </div>
}


export default HeaderSearch
