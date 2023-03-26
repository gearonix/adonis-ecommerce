import { DependencyList, MutableRefObject, useEffect, useRef, useState } from 'react'
import { useThrottle } from 'shared/lib/hooks/useThrottle'


export const useBottomScroll = (...deps: DependencyList) => {
  const bottomRef = useRef() as MutableRefObject<HTMLDivElement>
  const containerRef = useRef() as MutableRefObject<HTMLDivElement>
  const [scrollBottomSize, setScrollBottom] = useState<number>(Infinity)

  const scrollToBottom = () => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }
  }
  useEffect(() => {
    scrollToBottom()
    setTimeout(scrollToBottom, 550)
  }, [containerRef.current, ...deps])

  const rememberContainerScroll = () => {
    const scrollTop = containerRef.current.scrollHeight -
        containerRef.current.clientHeight - scrollBottomSize
    containerRef.current?.scrollTo(0, scrollTop )
  }


  const onScroll = useThrottle(() => {
    if (containerRef.current) {
      const scrollBottom = getScrollBottom(containerRef)
      setScrollBottom(scrollBottom)
    }
  }, 100)

  const getScrollBottom = (ref: MutableRefObject<HTMLDivElement>) => {
    return ref.current.scrollHeight - ref.current.scrollTop - ref.current.clientHeight
  }

  return {
    bottomRef,
    scrollToBottom,
    onScroll,
    scrollBottomSize,
    containerRef,
    rememberContainerScroll
  }
}
