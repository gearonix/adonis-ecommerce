import { ApiConfig, StateSchema } from 'app/store/types'
import { AsyncThunkAction } from '@reduxjs/toolkit'
import axios, { AxiosStatic } from 'axios'
import { apiConfig } from 'app/store/config/apiConfig'

jest.mock('axios')

const mockedAxios = jest.mocked(axios)

type ActionCreator<Return, Arg, Rejected> = (arg: Arg) =>
    AsyncThunkAction<Return, Arg, { rejectValue: Rejected }>

export class JestAsyncThunk<Return, Arg, Rejected> {
  dispatch: jest.MockedFn<any>
  getState: () => StateSchema
  actionCreator: ActionCreator<Return, Arg, Rejected>
  api: any
  constructor(actionCreator : ActionCreator<Return, Arg, Rejected>, apiName: keyof ApiConfig) {
    this.actionCreator = actionCreator
    this.dispatch = jest.fn()
    this.getState = jest.fn()
    const currentApi = apiConfig[apiName]
    const mockApi = Object.entries(currentApi).map(([key, value]) => [key, jest.fn()])
    this.api = {
      [apiName]: Object.fromEntries(mockApi)
    }
  }
  async call(arg: Arg) {
    const action = this.actionCreator(arg)
    return action(this.dispatch, this.getState, { api: this.api })
  }
}
