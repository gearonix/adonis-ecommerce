import { JestAsyncThunk } from 'shared/lib/jest'
import { getUserProducts } from './getUserProducts'
import { usersInitialState } from 'shared/types/slices'
import { Nullable, ObjectNullable } from 'shared/types/common'
import { UserSlice } from 'shared/types/slices/user'
import { productsActions } from 'widgets/Products'

describe('getUserProducts', () => {
  let args: any
  let thunk: JestAsyncThunk<void, any, string>
  let preloadedState: ObjectNullable<UserSlice>
  beforeEach(() => {
    args = {

    }
    preloadedState = {
      ...usersInitialState,
      userId: 33
    }
    thunk = new JestAsyncThunk(getUserProducts, 'products', 'user', preloadedState)
  })

  test('getUserProducts success', async () => {
    const res = {
      data: 'test'
    }
    await thunk.mock<'products'>('userProducts', res)
    const { dispatch, api, status, payload } = await thunk.call(args)

    expect(api.userProducts).toHaveBeenCalled()
    expect(status).toBe('fulfilled')
    expect(payload).not.toBeDefined()
    expect(dispatch).toBeCalled()
    expect(dispatch).toBeCalledWith(productsActions.setProducts(res as any))
  })
  test('getUserProducts error', async () => {
    const res = {
      data: 'test'
    }
    await thunk.errorMock<'products'>('userProducts')
    const { status, api, payload, dispatch } = await thunk.call(args)

    expect(status).toBe('fulfilled')
    expect(api.userProducts).toHaveBeenCalled()
    expect(dispatch).toBeCalled()
    expect(dispatch).not.toBeCalledWith(productsActions.setProducts(res as any))
    expect(payload).not.toBeDefined()
  })
})

