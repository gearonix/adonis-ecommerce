import { JestAsyncThunk } from 'shared/lib/jest'
import { changeCommentsPage } from './changeCommentsPage'
import { productActions, CurrentProductSlice, productInitialState as initialState } from 'widgets/CurrentProduct'

describe('changeCommentsPage', () => {
  let args: any
  let thunk: JestAsyncThunk<string | undefined, any, string>
  beforeEach(() => {
    args = {

    }
    const preloadedState: CurrentProductSlice = {
      ...initialState,
      productInfo: {
        ...initialState.productInfo,
        productId: 66
      }

    }
    thunk = new JestAsyncThunk(changeCommentsPage, 'product', 'currentProduct', preloadedState)
  })

  test('changeCommentsPage success', async () => {
    const res = { data: 'test' }
    await thunk.mock<'product'>('setCommentsPage', res)
    const { dispatch, api, status, payload } = await thunk.call(args)

    expect(api.setCommentsPage).toHaveBeenCalled()
    expect(status).toBe('fulfilled')
    expect(payload).not.toBeDefined()
    expect(dispatch).toBeCalled()
    expect(dispatch).toBeCalledWith(productActions.setComments(res as any))
  })
})

