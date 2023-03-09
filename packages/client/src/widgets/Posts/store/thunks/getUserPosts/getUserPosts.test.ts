import { JestAsyncThunk } from 'shared/lib/jest'
import { getUserPosts } from './getUserPosts'
import { postActions } from 'widgets/Posts'
import { usersInitialState } from 'shared/types/slices'

describe('getUserPosts', () => {
  let arg: any
  let thunk: JestAsyncThunk<void, any, string>
  beforeEach(() => {
    arg = 2
    const preloadedState = {
      ...usersInitialState,
      userId: 12
    }
    thunk = new JestAsyncThunk(getUserPosts, 'posts', 'user', preloadedState)
  })
  test('getUserPosts success', async () => {
    const res = {
      data: 'test'
    }
    await thunk.mock<'posts'>('getPosts', res)
    const { dispatch, api, status, payload } = await thunk.call(null)

    expect(api.getPosts).toHaveBeenCalled()
    expect(status).toBe('fulfilled')
    expect(payload).not.toBeDefined()
    expect(dispatch).toBeCalled()
    expect(dispatch).toBeCalledWith(postActions.setPosts(res as any))
  })
  test('getUserPosts error', async () => {
    const res = {
      data: 'test'
    }
    await thunk.errorMock<'posts'>('getPosts')
    const { status, api, dispatch, payload } = await thunk.call(arg)

    expect(status).toBe('fulfilled')
    expect(api.getPosts).toHaveBeenCalled()
    expect(dispatch).toBeCalled()
    expect(payload).not.toBeDefined()
    expect(dispatch).not.toBeCalledWith(postActions.setPosts(res as any))
  })
})

