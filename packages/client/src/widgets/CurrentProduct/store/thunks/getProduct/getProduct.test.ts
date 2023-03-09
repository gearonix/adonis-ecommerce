import { JestAsyncThunk } from 'shared/lib/jest'
import { getProduct } from './getProduct'
import { productActions } from 'widgets/CurrentProduct'

describe('getProduct', () => {
  let args: any
  let thunk: JestAsyncThunk<void, string, string>
  beforeEach(() => {
    args = 'slippery'
    thunk = new JestAsyncThunk(getProduct, 'product')
  })

  test('getProduct without parameter', async () => {
    const res = {
      data: 'test'
    }
    await thunk.mock<'product'>('getProduct', res)
    const { status, payload, api, dispatch } = await thunk.call(null as any)

    expect(dispatch).not.toHaveBeenCalledWith(productActions.setProduct(res as any))
    expect(api.getProduct).not.toHaveBeenCalled()
    expect(status).toBe('fulfilled')
    expect(payload).not.toBeDefined()
  })
  test('getProduct fulfilled', async () => {
    const res = { data: 'test' }
    await thunk.mock<'product'>('getProduct', res)
    const { status, api, payload, dispatch } = await thunk.call(args)

    expect(status).toBe('fulfilled')
    expect(api.getProduct).toHaveBeenCalled()
    expect(dispatch).toBeCalled()
    expect(payload).not.toBeDefined()
    expect(dispatch).toBeCalledWith(productActions.setProduct(res as any))
  })
})

