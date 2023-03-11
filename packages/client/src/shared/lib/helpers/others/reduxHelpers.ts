import { ActionReducerMapBuilder } from '@reduxjs/toolkit'
import { StateSchema } from 'app/store/types'
import { AsyncThunk } from 'shared/types/redux'


const setIsLoaded = <T extends keyof StateSchema>(isLoading: boolean) =>
  (state: Exclude<StateSchema[T], undefined>) => {
    if ('isLoading' in state) {
      state.isLoading = isLoading
    }
  }


export const withLoading = <T extends keyof StateSchema>(builder: ActionReducerMapBuilder<any>,
  ...thunks: AsyncThunk[]) => {
  thunks.forEach((thunk) => {
    builder
        .addCase(thunk.pending, setIsLoaded(true))
        .addCase(thunk.fulfilled, setIsLoaded(false))
        .addCase(thunk.rejected, setIsLoaded(false))
  })
}
