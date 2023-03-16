import { JestAsyncThunk } from 'shared/lib/jest'
import { getRecommendedProducts } from './getRecommendedProducts'
import { SearchControlsForm } from 'widgets/Products/types'
import { Product } from 'widgets/Products'

describe('getRecommendedProducts', () => {
  let args: Partial<SearchControlsForm>
  let thunk: JestAsyncThunk<Product[], SearchControlsForm, string>
  beforeEach(() => {
    args = {

    }
    thunk = new JestAsyncThunk(getRecommendedProducts, 'products') as any
  })

  test('getRecommendedProducts success', async () => {
    const res = {
      hello: 'notice'
    }
    await thunk.mock<'products'>('recommended', res)
    const { dispatch, api, status, payload } = await thunk.call(args as SearchControlsForm)

    expect(api.recommended).toHaveBeenCalled()
    expect(status).toBe('fulfilled')
    expect(payload).toBeDefined()
    expect(payload).toStrictEqual(res)
    expect(dispatch).toBeCalled()
  })
  test('getRecommendedProducts error', async () => {
    await thunk.errorMock<'products'>('recommended')
    const { status, api, payload, dispatch } = await thunk.call(args as SearchControlsForm)

    expect(status).toBe('rejected')
    expect(api.recommended).toHaveBeenCalled()
    expect(dispatch).toBeCalled()
    expect(payload).toBe('')
  })
})

