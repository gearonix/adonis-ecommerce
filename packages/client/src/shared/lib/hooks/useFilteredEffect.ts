import React, { useEffect } from 'react'

interface UseFilteredEffect{
    (callback: React.EffectCallback, deps: React.DependencyList): void
}

export const useFilteredEffect: UseFilteredEffect = (callback: () => void, deps) => {
  useEffect(() => {
    for (const dependency of deps) {
      if (!dependency) {
        return
      }
    }
    return callback()
  }, deps)
}
