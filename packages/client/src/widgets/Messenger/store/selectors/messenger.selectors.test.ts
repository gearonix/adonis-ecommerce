import { JestRedux } from 'shared/lib/jest'
import { Store } from 'shared/types/redux'
import { MessengerSelectors, MessengerSlice } from 'widgets/Messenger'


describe('MessengerSelectors', () => {
  const tests = new JestRedux()
  let store: Store
  let state: MessengerSlice
  const initialState: Partial<MessengerSlice> = {
    isTyping: true,
    messages: [1, 2, 3] as any,
    rooms: [3, 4, 5] as any
  }

  beforeEach(() => {
    store = tests.configureTestStore('messenger', initialState)
    state = tests.createReducerState(store, 'messenger')
  })

  test('rooms', () => {
    expect(MessengerSelectors.rooms(tests.selector('messenger', state)))
        .toStrictEqual(state.rooms.data)
  })
  test('messages', () => {
    expect(MessengerSelectors.messages(tests.selector('messenger', state)))
        .toStrictEqual(state.messages)
  })
  test('selectedId', () => {
    expect(MessengerSelectors.selectedId(tests.selector('messenger', state)))
        .toStrictEqual(state.selectedId)
  })
  test('userStatus', () => {
    expect(MessengerSelectors.userStatus(tests.selector('messenger', state))).toBe('typing...')
  })
})

