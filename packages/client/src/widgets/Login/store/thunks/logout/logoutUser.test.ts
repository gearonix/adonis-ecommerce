import { JestAsyncThunk } from 'shared/lib/jest'
import { logoutUser } from './logoutUser'
import { userActions } from 'widgets/Profile'
import { authActions } from 'widgets/Login/store/slice/authReducer'
import { cartActions } from 'widgets/Cart/store/slice/cartReducer'

describe('logoutUser', () => {
  let thunk: JestAsyncThunk<void, any, string>
  beforeEach(() => {
    thunk = new JestAsyncThunk(logoutUser, 'auth')
  })

  test('logoutUser success', async () => {
    const res = {}
    await thunk.mock<'auth'>('clearAuthToken', res)
    const { dispatch, api, status, payload, redirect } = await thunk.call('')

    expect(api.clearAuthToken).toHaveBeenCalled()
    expect(status).toBe('fulfilled')
    expect(payload).not.toBeDefined()
    expect(dispatch).toBeCalled()
    expect(dispatch).toBeCalledWith(userActions.clearUser())
    expect(dispatch).toBeCalledWith(authActions.logout())
    expect(dispatch).toBeCalledWith(cartActions.removeAll())
    expect(redirect).toBeCalled()
  })
})

