import { JestAsyncThunk } from 'shared/lib/jest'
import { loginUser } from 'widgets/Login/store/thunks'
import { LoginForm } from 'widgets/Login'

describe('loginThunks', () => {
  let args: LoginForm
  let thunk: JestAsyncThunk<undefined, LoginForm, string>
  beforeEach(() => {
    args = {
      email: 'steer',
      password: 'new'
    }
    thunk = new JestAsyncThunk(loginUser, 'auth')
  })
  test('loginUser success', async () => {
    await thunk.mock<'auth'>('loginUser', { user: '123123' })
    const { dispatch, api, status, payload } = await thunk.call(args)

    expect(api.loginUser).toHaveBeenCalled()
    expect(dispatch).toHaveBeenCalledTimes(3)
    expect(status).toBe('fulfilled')
    expect(payload).not.toBeDefined()
  })
  test('loginUser error', async () => {
    await thunk.errorMock<'auth'>('loginUser')
    const { status, api, payload, dispatch } = await thunk.call(args)

    expect(status).toBe('rejected')
    expect(api.loginUser).toHaveBeenCalled()
    expect(payload).toBe('Incorrect email or password')
    expect(dispatch).toBeCalled()
  })
})

