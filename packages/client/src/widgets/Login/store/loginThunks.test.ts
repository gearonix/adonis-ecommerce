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
    const res = { data: { user: '123123' }, status: 200 }
    thunk.api.auth.loginUser.mockReturnValue(Promise.resolve(res))
    const result = await thunk.call(args)
    expect(thunk.api.auth.loginUser).toHaveBeenCalled()
    expect(thunk.dispatch).toHaveBeenCalledTimes(3)
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).not.toBeDefined()
  })
  test('loginUser error', async () => {
    const res = { status: 400 }
    thunk.api.auth.loginUser.mockReturnValue(Promise.resolve(res))
    const result = await thunk.call(args)

    expect(result.meta.requestStatus).toBe('rejected')
    expect(thunk.api.auth.loginUser).toHaveBeenCalled()
    expect(result.payload).toBe('Incorrect email or password')
  })
})

