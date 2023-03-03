import { FC } from 'react'
import s from './style.module.scss'
import { Button } from 'shared/ui/kit'
import { searchDefaultValues } from '../../lib/defaultValues'
import { onEnter } from 'features/SearchPage/lib/helpers'
import { useDispatch } from 'shared/types/redux'
import { productsActions } from 'widgets/Products'
import { useRouter } from 'next/router'
import { routes } from 'shared/config/routes'
import { useForm } from 'shared/lib/hooks/useForm'
import { Helpers } from 'shared/lib/helpers'

interface SearchForm{
    search: string,
}

const helpers = new Helpers()

const HeaderInput: FC = () => {
  const { reg, submit } = useForm<SearchForm>(null, searchDefaultValues)
  const dispatch = useDispatch()
  const router = useRouter()

  const onSearch = ({ search }: SearchForm) => {
    dispatch(productsActions.changeFilter({ search: helpers.toUndefined(search) }))

    if (router.pathname !== routes.SEARCH) {
      router.push(routes.SEARCH)
    }
  }


  return <div className={s.search}>
    <input className={s.search_input} placeholder={'Search'} {...reg('search').inputProps}
      onKeyDown={onEnter(submit(onSearch))}/>
    <Button w={'90px'} onClick={submit(onSearch)}>
                Search
    </Button>
  </div>
}


export default HeaderInput