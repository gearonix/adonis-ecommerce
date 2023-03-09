import { JestAsyncThunk } from 'shared/lib/jest'
import { getSavedProducts } from './getSavedProducts'
import { savedActions } from 'features/Saved'

describe('getSavedProducts', () => {
  let args: any
  let thunk: JestAsyncThunk<void, any, string>
  beforeEach(() => {
    args = {

    }
    thunk = new JestAsyncThunk(getSavedProducts, 'saved')
  })

  test('getSavedProducts success', async () => {
    const res = { test: 'trade' }
    await thunk.mock<'saved'>('getSaved', res)
    const { dispatch, api, status, payload } = await thunk.call(args)

    expect(api.getSaved).toHaveBeenCalled()
    expect(status).toBe('fulfilled')
    expect(payload).not.toBeDefined()
    expect(dispatch).toBeCalled()
    expect(dispatch).toBeCalledWith(savedActions.setSaved(res as any))
  })
  test('getSavedProducts error', async () => {
    await thunk.errorMock<'saved'>('getSaved')
    const { status, api, payload, dispatch } = await thunk.call(args)

    expect(status).toBe('rejected')
    expect(api.getSaved).toHaveBeenCalled()
    expect(dispatch).toBeCalled()
    expect(payload).toBe('An error occured.')
  })
})

