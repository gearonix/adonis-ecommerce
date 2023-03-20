import { FC } from 'react'
import { Display, Map, WithSpring } from 'shared/lib/components'
import { CFC } from 'shared/types/components'
import { useTimeout } from 'shared/lib/hooks'
import { DefaultPreloader, PostsPreloader } from 'shared/ui/material'

interface WithLoadingProps{
    when: any,
    title: string,
    Icon: FC,
    loading: boolean,
    Preloader?: FC,
    count?: number,
    NotFound?: FC<{title: string, Icon: FC}>,
    className?: string
}


interface PreloaderWrapperProps{
    loading: boolean,
    Preloader?: FC,
    count?: number
}


export const WithLoading: CFC<WithLoadingProps> = (props) => {
  const { title, Icon, when: noItems, children, className,
    NotFound = DefaultPreloader, ...preloaderProps } = props


  return <PreloaderWrapper {...preloaderProps}>
    <Display when={Boolean(noItems)}>
      <NotFound title={title} Icon={Icon}/>
    </Display>
    <Display when={!noItems}>
      <WithSpring className={className}>
        {children}
      </WithSpring>
    </Display>
  </PreloaderWrapper>
}


const PreloaderWrapper: CFC<PreloaderWrapperProps> = (props) => {
  const { children, loading,
    Preloader = PostsPreloader, count = 2 } = props

  return !loading ? children :
          <WithSpring>
            <Map count={count}>
              <Preloader />
            </Map>
          </WithSpring>
}
