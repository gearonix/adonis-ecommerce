import { JestAsyncThunk } from 'shared/lib/jest'
import { getMessages } from './getMessages'
import { messengerInitialState as initialState } from 'widgets/Messenger/store/slice/initialState'
import { messengerActions } from 'widgets/Messenger'


describe('selectRoom', () => {
  let args: any
  let thunk: JestAsyncThunk<void, any, string>
  const defaultState = {
    ...initialState,
    userId: 77
  }
  beforeEach(() => {
    args = {

    }
    thunk = new JestAsyncThunk(getMessages, 'messenger', 'messenger', defaultState)
  })

  test('selectRoom success', async () => {
    const res = { test: 'elephant' }
    await thunk.mock<'messenger'>('selectRoom', res)
    const { dispatch, api, status, payload } = await thunk.call(args)

    expect(api.selectRoom).toHaveBeenCalled()
    expect(status).toBe('fulfilled')
    expect(payload).not.toBeDefined()
    expect(dispatch).toBeCalled()
    expect(dispatch).toHaveBeenCalledWith(messengerActions.setMessages(res as any))
  })
  test('selectRoom error', async () => {
    await thunk.errorMock<'messenger'>('selectRoom')
    const { status, api, payload, dispatch } = await thunk.call(args)

    expect(status).toBe('fulfilled')
    expect(api.selectRoom).toHaveBeenCalled()
    expect(dispatch).toBeCalled()
    expect(payload).not.toBeDefined()
  })
})

