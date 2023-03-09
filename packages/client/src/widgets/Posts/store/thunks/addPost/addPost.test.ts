import { JestAsyncThunk } from 'shared/lib/jest'
import { addPost } from './addPost'
import { AddPostForm } from 'widgets/Posts/types'
import { postActions } from 'widgets/Posts'

describe('addPost', () => {
  let args: AddPostForm
  let thunk: JestAsyncThunk<void, AddPostForm, string>
  let res: any
  let imageRes: any
  beforeEach(() => {
    args = {
      message: 'sight',
      image: null as any
    }
    res = {
      test: true
    }
    imageRes = {
      fileUrl: 'solution'
    }
    thunk = new JestAsyncThunk(addPost, 'posts')
  })

  test('addPost success', async () => {
    await thunk.mock<'posts'>('add', res)
    await thunk.mock<'posts'>('setImage', imageRes)
    const { dispatch, api, status, payload } = await thunk.call(args)

    expect(api.add).toHaveBeenCalled()
    expect(api.add).toHaveBeenCalledWith(args.message)
    expect(api.setImage).toHaveBeenCalled()
    expect(status).toBe('fulfilled')
    expect(payload).not.toBeDefined()
    expect(dispatch).toBeCalled()

    const actionArg = { ...res, image: imageRes.fileUrl }

    expect(dispatch).toBeCalledWith(postActions.addPost(actionArg as any))
  })
  test('addPost error - add', async () => {
    await thunk.errorMock<'posts'>('add')
    await thunk.mock<'posts'>('setImage', imageRes)
    const { status, api, dispatch, payload } = await thunk.call(args)

    expect(status).toBe('fulfilled')
    expect(api.add).toHaveBeenCalled()
    expect(api.setImage).not.toHaveBeenCalled()
    expect(dispatch).toBeCalled()
    expect(payload).not.toBeDefined()
  })
  test('addPost error - setImage', async () => {
    const res = {
      test: true
    }

    await thunk.mock<'posts'>('add', res)
    await thunk.errorMock<'posts'>('setImage')
    const { status, api, dispatch, payload } = await thunk.call(args)

    expect(status).toBe('fulfilled')
    expect(api.add).toHaveBeenCalled()
    expect(api.setImage).toHaveBeenCalled()
    expect(payload).not.toBeDefined()
  })
})

