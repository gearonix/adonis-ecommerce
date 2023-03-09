import { JestAsyncThunk } from 'shared/lib/jest'
import { authorizeUser } from './authorizeUser'
import { authActions } from 'widgets/Login/store/slice/authReducer'

describe('authorizeUser', () => {
  let args: void
  let thunk: JestAsyncThunk<undefined, void, string>
  beforeEach(() => {
    thunk = new JestAsyncThunk(authorizeUser, 'auth')
  })

  test('authorizeUser success', async () => {
    const res = { userId: 66 }
    await thunk.mock<'auth'>('getCurrentUser', res)
    const { dispatch, api, status, payload } = await thunk.call(args)

    expect(api.getCurrentUser).toHaveBeenCalled()
    expect(status).toBe('fulfilled')
    expect(payload).not.toBeDefined()
    expect(dispatch).toBeCalled()
    expect(dispatch).toBeCalledWith(authActions.authorizeUser(res as any))
  })
  test('authorizeUser error', async () => {
    await thunk.errorMock<'auth'>('getCurrentUser')
    const { status, api, payload, dispatch } = await thunk.call(args)

    expect(status).toBe('rejected')
    expect(api.getCurrentUser).toHaveBeenCalled()
    expect(payload).toBe('Please sign in')
    expect(dispatch).toBeCalled()
    expect(dispatch).toBeCalledWith(authActions.authorizationFailed())
  })
})

