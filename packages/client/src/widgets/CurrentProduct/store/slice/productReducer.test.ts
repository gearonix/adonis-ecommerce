import { JestRedux } from 'shared/lib/jest'
import { Store } from 'app/store/store'
import { currentProductSlice, productActions } from 'widgets/CurrentProduct'
import { CurrentProductSlice, productInitialState } from 'shared/types/slices'


describe('productReducer', () => {
  const tests = new JestRedux()
  let store: Store
  let state: CurrentProductSlice
  const initialState: CurrentProductSlice = {
    ...productInitialState,
    isLoading: true
  }

  beforeEach(() => {
    store = tests.configureTestStore('currentProduct', initialState)
    state = tests.createReducerState(store, 'currentProduct') as CurrentProductSlice
  })

  test('should work with initial state', () => {
    const newState = currentProductSlice(undefined, productActions.setCommentsPage(2))
    expect(newState.comments.page).toBe(2)
  })
  test('setCommentsPage', () => {
    expect(currentProductSlice(state, productActions.setCommentsPage(4)))
        .toEqual({ ...state, comments: { ...state.comments, page: 4 } })
  })
  test('clearProduct', () => {
    expect(currentProductSlice(state, productActions.clearProduct())).toEqual(productInitialState)
  })
  test('addComment', () => {
    const comment = 'test_comment'
    const newState = currentProductSlice(state, productActions.addComment(comment as any))
    expect(newState.comments.data[0]).toBe('test_comment')
  })
  test('setComments', () => {
    const comments = {
      data: ['test_comment'],
      count: 12
    }
    const newState = currentProductSlice(state, productActions.setComments(comments as any))
    expect(newState.comments.data).toStrictEqual(['test_comment'])
    expect(newState.comments.count).toBe(12)
  })
})

