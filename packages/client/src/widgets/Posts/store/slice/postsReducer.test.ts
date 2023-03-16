import { JestRedux } from 'shared/lib/jest'
import { postsInitialState } from 'widgets/Posts/store/slice/initialState'
import { Store } from 'app/store/store'
import { postActions, postSlice } from 'widgets/Posts'
import { PostsSlice } from 'widgets/Profile'

describe('postsReducer', () => {
  const tests = new JestRedux()
  let store: Store
  let state: PostsSlice
  const initialState: PostsSlice = {
    ...postsInitialState,
    count: 10,
    page: 2
  }

  beforeEach(() => {
    store = tests.configureTestStore('posts', initialState)
    state = tests.createReducerState(store, 'posts') as PostsSlice
  })

  test('setPage', () => {
    expect(postSlice(state, postActions.setPage(3)).page).toBe(3)
  })
  test('setPosts', () => {
    const posts = {
      data: ['post1', 'post2'],
      count: 14
    }
    expect(postSlice(state, postActions.setPosts(posts as any)).count).toBe(14)
    expect(postSlice(state, postActions.setPosts(posts as any)).data).toHaveLength(2)
    expect(postSlice(state, postActions.setPosts(posts as any)).data[1]).toBe('post2')
  })
  test('addPost', () => {
    expect(postSlice(state, postActions.addPost('post' as any)).data).toStrictEqual(['post'])
  })
})

