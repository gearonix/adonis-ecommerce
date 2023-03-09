import { JestAsyncThunk } from 'shared/lib/jest'
import { getCartProducts } from './getCartProducts'

describe('getCartProducts', () => {
  let args: any
  let thunk: JestAsyncThunk<any, any, any>
  beforeEach(() => {
    args = [1, 2, 3]
    thunk = new JestAsyncThunk(getCartProducts, 'products')
  })

  test('getCartProducts success', async () => {
    const res = [4, 5, 6]
    await thunk.mock<'products'>('getCartProducts', res)
    const { dispatch, api, status, payload } = await thunk.call(args)

    expect(api.getCartProducts).toHaveBeenCalled()
    expect(status).toBe('fulfilled')
    expect(dispatch).toBeCalled()
    expect(payload).toBeDefined()
    expect(payload).toStrictEqual(res)
  })
  test('getCartProducts error', async () => {
    await thunk.errorMock<'products'>('getCartProducts')
    const { status, api, payload, dispatch } = await thunk.call(args)

    expect(status).toBe('fulfilled')
    expect(api.getCartProducts).toHaveBeenCalled()
    expect(dispatch).toBeCalled()
    expect(payload).toBe(null)
  })
})

