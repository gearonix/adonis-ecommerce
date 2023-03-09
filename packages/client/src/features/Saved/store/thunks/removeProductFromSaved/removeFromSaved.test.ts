import { JestAsyncThunk } from 'shared/lib/jest'
import { removeProductFromSaved } from './removeFromSaved'
import { savedActions } from 'features/Saved'

describe('removeFromSaved', () => {
  let args: any
  let thunk: JestAsyncThunk<void, any, string>
  beforeEach(() => {
    args = 2
    thunk = new JestAsyncThunk(removeProductFromSaved, 'saved')
  })

  test('removeFromSaved success', async () => {
    const res = {}
    await thunk.mock<'saved'>('remove', res)
    const { dispatch, api, status, payload } = await thunk.call(args)

    expect(api.remove).toHaveBeenCalled()
    expect(status).toBe('fulfilled')
    expect(payload).not.toBeDefined()
    expect(dispatch).toBeCalled()
    expect(dispatch).toBeCalledWith(savedActions.removeFromSaved(args))
  })
  test('removeFromSaved error', async () => {
    await thunk.errorMock<'saved'>('remove')
    const { status, api, payload, dispatch } = await thunk.call(args)

    expect(status).toBe('rejected')
    expect(api.remove).toHaveBeenCalled()
    expect(dispatch).toBeCalled()
    expect(payload).toBe('An error occured.')
  })
})

