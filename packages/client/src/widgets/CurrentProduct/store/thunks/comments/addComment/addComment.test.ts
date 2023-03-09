import { JestAsyncThunk } from 'shared/lib/jest'
import { addComment } from './addComment'
import { productActions } from 'widgets/CurrentProduct'

describe('addComment', () => {
  let args: any
  let thunk: JestAsyncThunk<string | undefined, any, string>
  beforeEach(() => {
    args = {

    }
    thunk = new JestAsyncThunk(addComment, 'product')
  })

  test('addComment success', async () => {
    const res = { hello: 'world' }
    await thunk.mock<'product'>('createComment', res)
    const { dispatch, api, status, payload } = await thunk.call(args)

    expect(api.createComment).toHaveBeenCalled()
    expect(status).toBe('fulfilled')
    expect(payload).not.toBeDefined()
    expect(dispatch).toBeCalled()
    expect(dispatch).toBeCalledWith(productActions.addComment(res as any))
  })
  test('addComment error', async () => {
    await thunk.errorMock<'product'>('createComment')
    const { status, api, payload } = await thunk.call(args)

    expect(status).toBe('fulfilled')
    expect(payload).toBe('An error occurred.')
    expect(api.createComment).toHaveBeenCalled()
  })
})

