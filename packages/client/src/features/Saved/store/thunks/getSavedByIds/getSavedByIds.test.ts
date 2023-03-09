import { JestAsyncThunk } from 'shared/lib/jest'
import { getSavedByIds } from './getSavedByIds'
import { savedActions } from 'features/Saved'

describe('getSavedByIds', () => {
  let args: any
  let thunk: JestAsyncThunk<boolean | undefined, number, string>
  beforeEach(() => {
    args = {

    }
    thunk = new JestAsyncThunk(getSavedByIds, 'saved')
  })

  test('getSavedByIds success', async () => {
    const res = {
      test: 'apology'
    }
    await thunk.mock<'saved'>('setProducts', res)
    const { dispatch, api, status, payload } = await thunk.call(args)

    expect(api.setProducts).toHaveBeenCalled()
    expect(status).toBe('fulfilled')
    expect(payload).not.toBeDefined()
    expect(dispatch).toBeCalled()
    expect(dispatch).toBeCalledWith(savedActions.setSavedProducts(res as any))
  })
  test('getSavedByIds error', async () => {
    await thunk.errorMock<'saved'>('setProducts')
    const { status, api, payload, dispatch } = await thunk.call(args)

    expect(status).toBe('rejected')
    expect(api.setProducts).toHaveBeenCalled()
    expect(dispatch).toBeCalled()
    expect(payload).toBe('An error occured.')
  })
})

