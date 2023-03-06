import { ActionReducerMapBuilder } from '@reduxjs/toolkit'
import { StateSchema } from 'app/store/types'
import { AsyncThunk } from 'shared/types/redux'

export const withLoading = <T extends keyof StateSchema>(builder: ActionReducerMapBuilder<any>,
  ...thunks: AsyncThunk[]) => {
  thunks.forEach((thunk) => {
    builder.addCase(thunk.pending, (state: Exclude<StateSchema[T], undefined>) => {
      if ('isLoading' in state) {
        state.isLoading = true
      }
    }).addCase(thunk.fulfilled, ((state: Exclude<StateSchema[T], undefined>) => {
      if ('isLoading' in state) {
        state.isLoading = false
      }
    }))
  })
}
