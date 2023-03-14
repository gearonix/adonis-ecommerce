import { DependencyList, useEffect, useRef, useState } from 'react'


export const useBottomScroll = (...deps: DependencyList) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [scrollBottomSize, setScrollBottom] = useState<number>(Infinity)

  const scrollToBottom = () => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }
  }
  useEffect(() => {
    scrollToBottom()
    setTimeout(scrollToBottom, 550)
  }, [...deps, ref])

  const onScroll = () => {
    if (containerRef.current) {
      const scrollBottom = containerRef.current.scrollHeight -
          containerRef.current.scrollTop - containerRef.current.clientHeight
      setScrollBottom(scrollBottom)
    }
  }
  return {
    bottomRef: ref,
    scrollToBottom,
    onScroll,
    scrollBottomSize,
    containerRef
  }
}
