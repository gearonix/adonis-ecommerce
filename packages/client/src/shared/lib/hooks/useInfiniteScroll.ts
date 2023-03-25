import { MutableRefObject, useEffect, useRef } from 'react'
import { useFilteredEffect } from 'shared/lib/hooks/useFilteredEffect'

export interface UseInfiniteScrollOptions{
    callback: () => void,
    triggerRef: MutableRefObject<HTMLElement>;
    wrapperRef: MutableRefObject<HTMLElement>;
}

export const useFirstRender = () => {
  const firstRender = useRef(true)

  useEffect(() => {
    firstRender.current = false
  }, [])

  return firstRender.current
}


export const useInfiniteScroll = ({ wrapperRef, triggerRef, callback }: UseInfiniteScrollOptions) => {
  useFilteredEffect(() => {
    const wrapper = wrapperRef.current
    const trigger = triggerRef.current

    const configOptions = {
      root: wrapper,
      rootMargin: '0px',
      threshold: 1.0
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        callback()
      }
    }, configOptions)
    try {
      observer.observe(trigger)
      return () => {
        observer.unobserve(trigger)
      }
    } catch (e) {}
  }, [wrapperRef.current, triggerRef.current])
}
