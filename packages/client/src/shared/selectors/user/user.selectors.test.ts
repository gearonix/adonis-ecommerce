import { JestRedux } from 'shared/lib/jest'
import { Store } from 'shared/types/redux'
import { UserSelectors } from 'shared/selectors'
import { ObjectNullable } from 'shared/types/common'
import { UserSlice } from 'shared/types/slices/user'
import { UserRoles } from 'app/config/globals'


describe('UserSelectors', () => {
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
    expect(UserSelectors.userId(tests.selector('user', state))).toBe(77)
  })
  test('user', () => {
    expect(UserSelectors.user(tests.selector('user', state))).toStrictEqual(state)
  })
  test('isSalesman', () => {
    expect(UserSelectors.isSalesman(tests.selector('user', state))).toBeFalsy()
  })
  test('isMe', () => {
    expect(UserSelectors.isSalesman(tests.selector('user', state))).toBeFalsy()
  })
  test('isExists', () => {
    expect(UserSelectors.isExists(tests.selector('user', state))).toBeTruthy()
  })
  test('isLoading', () => {
    expect(UserSelectors.isLoading(tests.selector('user', state))).not.toBeDefined()
  })
})

