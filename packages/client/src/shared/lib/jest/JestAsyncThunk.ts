import { ApiConfig, ApiConfigKey, StateSchema, StateSchemaKey } from 'app/store/types'
import { AsyncThunkAction } from '@reduxjs/toolkit'
import { apiConfig } from 'app/store/config/apiConfig'
import { JestRedux } from 'shared/lib/jest/JestRedux'
import { ValueOf } from 'shared/types/common'

type ActionCreator<Return, Arg, Rejected> = (arg: Arg) =>
    AsyncThunkAction<Return, Arg, { rejectValue: Rejected }>

export class JestAsyncThunk<Return, Arg, Rejected> {
  private readonly dispatch: jest.MockedFn<any>
  private readonly getState: () => StateSchema
  private readonly api: any
  private readonly actionCreator: ActionCreator<Return, Arg, Rejected>
  private readonly apiKey: ApiConfigKey

  constructor(
      actionCreator : ActionCreator<Return, Arg, Rejected>,
      apiKey: ApiConfigKey,
      stateKey?: StateSchemaKey,
      preloadedState?: ValueOf<StateSchema>
  ) {
    this.actionCreator = actionCreator
    this.dispatch = jest.fn()

    const testStore = new JestRedux()

    this.getState = jest.fn(() => {
      return testStore.configureTestStore(stateKey, preloadedState).getState()
    })

    this.apiKey = apiKey

    const mockApi = Object.entries(apiConfig[apiKey]).map(([key]) => [key, jest.fn()])
    this.api = {
      [apiKey]: Object.fromEntries(mockApi)
    }
  }

  public async call(arg: Arg) {
    const action = this.actionCreator(arg)

    const extra = {
      api: this.api,
      redirect: jest.fn()
    }

    const result = await action(this.dispatch, this.getState, extra)

    return {
      api: this.api[this.apiKey],
      dispatch: this.dispatch,
      status: result.meta.requestStatus,
      payload: result.payload,
      redirect: extra.redirect,
      getState: this.getState
    }
  }

  public async mock<T extends ApiConfigKey>(method: keyof ApiConfig[T], data = {}, status = 200) {
    const apiMethod = this.api[this.apiKey][method]
    apiMethod.mockReturnValue(Promise.resolve({ data, status }))
  }
  public async errorMock<T extends ApiConfigKey>(method: keyof ApiConfig[T]) {
    await this.mock(method, {}, 500)
  }
}
