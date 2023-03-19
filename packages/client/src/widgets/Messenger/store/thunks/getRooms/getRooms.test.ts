import { JestAsyncThunk } from 'shared/lib/jest'
import { getRooms } from './getRooms'
import { messengerInitialState as initialState } from 'widgets/Messenger/store/slice/initialState'
import { messengerActions } from 'widgets/Messenger'

describe('getRooms', () => {
  let args: any
  let thunk: JestAsyncThunk<void, any, string>
  const defaultState = {
    ...initialState,
    userId: 77
  }
  beforeEach(() => {
    args = {

    }
    thunk = new JestAsyncThunk(getRooms, 'messenger', 'messenger', defaultState)
  })

  test('getRooms success', async () => {
    const res = { test: 'quarter' }
    await thunk.mock<'messenger'>('getRooms', res)
    const { dispatch, api, status, payload } = await thunk.call(args)

    expect(api.getRooms).toHaveBeenCalled()
    expect(status).toBe('fulfilled')
    expect(payload).not.toBeDefined()
    expect(dispatch).toBeCalled()
    expect(dispatch).toHaveBeenCalledWith(messengerActions.setRooms(res as any))
  })
  test('getRooms error', async () => {
    await thunk.errorMock<'messenger'>('getRooms')
    const { status, api, payload, dispatch } = await thunk.call(args)

    expect(status).toBe('rejected')
    expect(api.getRooms).toHaveBeenCalled()
    expect(dispatch).toBeCalled()
  })
})

