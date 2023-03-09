import { JestAsyncThunk } from 'shared/lib/jest'
import { makeRegistration } from './makeRegistration'
import { Exceptions } from 'app/config/globals'

describe('makeRegistration', () => {
  let args: any
  let thunk: JestAsyncThunk<undefined, any, string>
  beforeEach(() => {
    args = {

    }
    thunk = new JestAsyncThunk(makeRegistration, 'auth')
  })

  test('makeRegistration success', async () => {
    const res = {}
    await thunk.mock<'auth'>('registerUser', res)
    const { dispatch, api, status, payload } = await thunk.call(args)

    expect(api.registerUser).toHaveBeenCalled()
    expect(status).toBe('fulfilled')
    expect(payload).not.toBeDefined()
    expect(dispatch).toBeCalled()
  })
  test('makeRegistration error', async () => {
    await thunk.errorMock<'auth'>('registerUser')
    const { status, api, payload, dispatch } = await thunk.call(args)

    expect(status).toBe('rejected')
    expect(api.registerUser).toHaveBeenCalled()
    expect(dispatch).toBeCalled()
    expect(payload).toBe(Exceptions.USER_ALREADY_EXISTS)
  })
})

