import { Store } from 'app/store/store'
import { StateSchema, StateSchemaKey } from 'app/store/types'
import { ValueOf } from 'shared/types/common'
import { postSlice } from 'widgets/Posts'
import { currentProductSlice } from 'widgets/CurrentProduct'
import { createStore } from 'app/index'

export class JestRedux {
  store: Store

  constructor() {
    this.store = this.configureTestStore()
  }

  public createReducerState<T extends StateSchemaKey>(store: Store, key: T):
      StateSchema[T] {
    return store.getState()[key]
  }

  public configureTestStore(key?: StateSchemaKey, initialState?: Partial<ValueOf<StateSchema>>) {
    const preloadedState = key && initialState ? { [key]: initialState } : {}

    const asyncReducers: any = {
      posts: postSlice,
      currentProduct: currentProductSlice
    }

    return createStore({
      asyncReducers,
      preloadedState
    })
  }
  public selector(key: StateSchemaKey, state: ValueOf<StateSchema>): any {
    return {
      [key]: state
    }
  }
}
