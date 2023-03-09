import { JestRedux } from 'shared/lib/jest'
import { Store } from 'app/store/store'
import { User, usersInitialState, UserSlice } from 'shared/types/slices/user'
import { userActions, userSlice } from 'widgets/Profile'
import { ObjectNullable } from 'shared/types/common'


describe('userReducer', () => {
  const tests = new JestRedux()
  let store: Store
  let state: ObjectNullable<UserSlice>
  const initialState: ObjectNullable<UserSlice> = {
    ...usersInitialState,
    firstName: 'Test',
    lastName: 'Test2',
    avatar: 's6hltsjjfx0'
  }

  beforeEach(() => {
    store = tests.configureTestStore('user', initialState)
    state = tests.createReducerState(store, 'user')
  })

  test('should work with initial state', () => {
    const params = {
      fileUrl: 'test fileUrl'
    }
    expect(userSlice(undefined, userActions.changeUserAvatar(params)).avatar).toEqual('test fileUrl')
  })
  test('changeUserAvatar', () => {
    const params = {
      fileUrl: 'Ge6p3'
    }
    expect(userSlice(state, userActions.changeUserAvatar(params)).avatar).toEqual('Ge6p3')
    expect(userSlice(state, userActions.changeUserAvatar(params)).userId).toEqual(null)
  })
  test('clearUser', () => {
    expect(userSlice(state, userActions.clearUser())).toEqual(usersInitialState)
  })
  test('setUser', () => {
    const params = {
      firstName: 'em7pfp',
      email: 'camd9a0'
    } as User

    const payload = userSlice(state, userActions.setUser(params))
    expect(payload.avatar).toEqual(state.avatar)
    expect(payload.email).toEqual(params.email)
    expect(payload.firstName).not.toEqual(state.email)
  })
})

