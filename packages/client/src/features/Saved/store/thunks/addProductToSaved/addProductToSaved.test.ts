import { JestAsyncThunk } from 'shared/lib/jest'
import { addProductToSaved } from './addProductToSaved'
import { savedActions } from 'features/Saved'

describe('addProductToSaved', () => {
  let arg: number
  let thunk: JestAsyncThunk<void, number, string>
  beforeEach(() => {
    arg = 12
    thunk = new JestAsyncThunk(addProductToSaved, 'saved')
  })

  test('addProductToSaved success', async () => {
    const res = {}
    await thunk.mock<'saved'>('add', res)
    const { dispatch, api, status, payload } = await thunk.call(arg)

    expect(api.add).toHaveBeenCalled()
    expect(status).toBe('fulfilled')
    expect(payload).not.toBeDefined()
    expect(dispatch).toBeCalled()
    expect(dispatch).toBeCalledWith(savedActions.addToSaved(arg))
  })
  test('addProductToSaved error', async () => {
    await thunk.errorMock<'saved'>('add')
    const { status, api, payload, dispatch } = await thunk.call(arg)

    expect(status).toBe('rejected')
    expect(api.add).toHaveBeenCalled()
    expect(dispatch).toBeCalled()
    expect(payload).toBe('An error occured.')
  })
})

