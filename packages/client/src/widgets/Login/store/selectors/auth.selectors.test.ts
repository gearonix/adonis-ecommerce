import { Store } from 'app/store/store'
import { JestRedux } from 'shared/lib/jest'
import { AuthSelectors, AuthSlice } from 'widgets/Login'


describe('AuthSelectors', () => {
  const tests = new JestRedux()
  let store: Store
  let state: AuthSlice
  const initialState: Partial<AuthSlice> = {
    userId: 33,
    isAuthorized: true,
    avatar: 'grand',
    firstName: 'former',
    email: 'plural'
  }

  beforeEach(() => {
    store = tests.configureTestStore('auth', initialState)
    state = tests.createReducerState(store, 'auth')
  })

  test('isAuthorized', () => {
    expect(AuthSelectors.isAuthorized(tests.selector('auth', state))).toBeTruthy()
  })
  test('userId', () => {
    expect(AuthSelectors.userId(tests.selector('auth', state))).toBe(33)
  })
  test('avatar', () => {
    expect(AuthSelectors.avatar(tests.selector('auth', state))).toBe('grand')
  })
  test('user', () => {
    expect(AuthSelectors.user(tests.selector('auth', state))).toBe(state)
  })
  test('userName', () => {
    expect(AuthSelectors.userName(tests.selector('auth', state))).toBe('former')
  })
  test('userName without firstName', () => {
    state.firstName = null
    expect(AuthSelectors.userName(tests.selector('auth', state))).toBe('plural')
  })
  test('userName without firstName and email', () => {
    state.firstName = null
    state.email = null
    expect(AuthSelectors.userName(tests.selector('auth', state))).toBe('User not found')
  })
})

