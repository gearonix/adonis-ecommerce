import { FC } from 'react'
import { Display, Map, WithSpring } from 'shared/lib/components'
import { CFC } from 'shared/types/components'
import { useTimeout } from 'shared/lib/hooks'
import { DefaultPreloader, PostsPreloader } from 'shared/ui/material'

interface NoItemsProps{
    when: any,
    title: string,
    Icon: FC,
    loading: boolean,
    Preloader?: FC,
    count?: number,
    NotFound?: FC<{title: string, Icon: FC}>
}


interface PreloaderWrapperProps{
    loading: boolean,
    Preloader?: FC,
    count?: number
}


export const WithLoading: CFC<NoItemsProps> = (props) => {
  const { title, Icon, when: noItems, children,
    NotFound = DefaultPreloader, ...preloaderProps } = props

  console.log(preloaderProps.loading)

  return <PreloaderWrapper {...preloaderProps}>
    <Display when={Boolean(noItems)}>
      <NotFound title={title} Icon={Icon}/>
    </Display>
    <Display when={!noItems}>
      <WithSpring>
        {children}
      </WithSpring>
    </Display>
  </PreloaderWrapper>
}


const PreloaderWrapper: CFC<PreloaderWrapperProps> = (props) => {
  const { children, loading,
    Preloader = PostsPreloader, count = 2 } = props
  console.log('loading', loading)

  return !loading ? children :
          <WithSpring>
            <Map count={count}>
              <Preloader />
            </Map>
          </WithSpring>
}
