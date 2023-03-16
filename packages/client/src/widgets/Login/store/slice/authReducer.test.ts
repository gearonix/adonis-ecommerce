import { authActions, authSlice } from './authReducer'
import { Store } from 'app/store/store'
import { AuthSlice, initialState } from './initialState'
import { JestRedux } from 'shared/lib/jest'
import { User } from 'widgets/Profile'


describe('Auth reducer', () => {
  const tests = new JestRedux()
  let store: Store
  let state: AuthSlice
  const defaultState: AuthSlice = {
    ...initialState,
    email: 'test'
  }
  beforeEach(() => {
    store = tests.configureTestStore('auth', defaultState)
    state = tests.createReducerState(store, 'auth')
  })

  test('should work with initial state', () => {
    expect(authSlice(undefined, authActions.authorizationFailed()).isAuthorized).toEqual(false)
  })
  test('authorizationFailed', () => {
    expect(authSlice(state, authActions.authorizationFailed()).isAuthorized).toEqual(false)
  })
  test('logout', () => {
    expect(authSlice(state, authActions.logout())).toEqual(defaultState)
  })
  test('authorizeUser', () => {
    const user = { userId: 1, avatar: 'avatar' } as User
    expect(authSlice(state, authActions.authorizeUser(user)).userId).toEqual(1)
    expect(authSlice(state, authActions.authorizeUser(user)).avatar).toEqual('avatar')
  })
  test('initial state', () => {
    expect(store.getState().auth.email).toBe('test')
  })
})
