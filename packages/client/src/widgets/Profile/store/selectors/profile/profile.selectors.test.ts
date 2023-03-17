import { JestRedux } from 'shared/lib/jest'
import { Store } from 'shared/types/redux'
import { ObjectNullable } from 'shared/types/common'
import { UserSlice } from 'widgets/Profile/store/slice/initialState/userInitialState'
import { UserRoles } from 'app/config/globals'
import ProfileSelectors from './profile.selectors'


describe('ProfileSelectors', () => {
  const tests = new JestRedux()
  let store: Store
  let state: ObjectNullable<UserSlice>
  const initialState: Partial<UserSlice> = {
    userId: 77,
    role: UserRoles.CUSTOMER,
    isMe: false
  }

  beforeEach(() => {
    store = tests.configureTestStore('user', initialState)
    state = tests.createReducerState(store, 'user')
  })

  test('userId', () => {
    expect(ProfileSelectors.userId(tests.selector('user', state))).toBe(77)
  })
  test('user', () => {
    expect(ProfileSelectors.user(tests.selector('user', state))).toStrictEqual(state)
  })
  test('isSalesman', () => {
    expect(ProfileSelectors.isSalesman(tests.selector('user', state))).toBeFalsy()
  })
  test('isMe', () => {
    expect(ProfileSelectors.isSalesman(tests.selector('user', state))).toBeFalsy()
  })
  test('isExists', () => {
    expect(ProfileSelectors.isExists(tests.selector('user', state))).toBeTruthy()
  })
  test('isLoading', () => {
    expect(ProfileSelectors.isLoading(tests.selector('user', state))).not.toBeDefined()
  })
})

