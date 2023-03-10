import { render, act } from '@testing-library/react'
import { ReactNode, Suspense } from 'react'
import { StoreProvider } from 'app/providers'
import { postSlice } from 'widgets/Posts'
import { currentProductSlice } from 'widgets/CurrentProduct'
import { ReducersMapObject } from '@reduxjs/toolkit'
import { StateSchema } from 'app/store/types'
import mockRouter from 'next-router-mock'


export const JestRender = async (component: ReactNode, url: string) => {
  const asyncReducers = {
    posts: postSlice,
    currentProduct: currentProductSlice
  } as ReducersMapObject<StateSchema>

  await act(async () => mockRouter.push(url))

  return act(async () => render(
      <StoreProvider asyncReducers={asyncReducers}>
        {component}
      </StoreProvider>
  ))
}
