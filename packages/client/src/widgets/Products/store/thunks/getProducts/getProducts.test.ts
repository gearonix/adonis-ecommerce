import { JestAsyncThunk } from 'shared/lib/jest'
import { getProducts } from './getProducts'
import { productsActions } from 'widgets/Products'

describe('getProducts', () => {
  let args: any
  let thunk: JestAsyncThunk<void, any, string>
  beforeEach(() => {
    args = {

    }
    thunk = new JestAsyncThunk(getProducts, 'products')
  })

  test('getProducts success', async () => {
    const res = {}
    await thunk.mock<'products'>('getProducts', res)
    const { dispatch, api, status, payload } = await thunk.call(args)

    expect(api.getProducts).toHaveBeenCalled()
    expect(status).toBe('fulfilled')
    expect(payload).not.toBeDefined()
    expect(dispatch).toBeCalled()
    expect(dispatch).toBeCalledWith(productsActions.setProducts(res as any))
  })
})

