import { JestRedux } from 'shared/lib/jest'
import { Store } from 'app/store/store'
import { messengerInitialState as initialState, MessengerSlice } from './initialState'
import { messengerActions, messengerSlice } from 'widgets/Messenger'
import { UserStatus } from 'shared/config/consts/others'


describe('productReducer', () => {
  const tests = new JestRedux()
  let store: Store
  let state: MessengerSlice
  const defaultState: MessengerSlice = {
    ...initialState,
    isTyping: true
  }

  beforeEach(() => {
    store = tests.configureTestStore('messenger', defaultState)
    state = tests.createReducerState(store, 'messenger') as MessengerSlice
  })

  test('should work with initial state', () => {
    const room = { test: 'curtain' }
    const newState = messengerSlice(undefined, messengerActions.setRooms(room as any))
    expect(newState.rooms.data).toBe(room)
  })
  test('addRoom', () => {
    const room = { test: 'curtain', roomId: 2 }
    const newState = messengerSlice(state, messengerActions.addRoom(room as any))
    expect(newState.rooms.data).toContain(room)
  })

  test('setMessages', () => {
    const messages = ['test', 'test2']
    const newState = messengerSlice(state, messengerActions.setMessages(['test', 'test2'] as any))
    expect(newState.messages).toStrictEqual(messages)
  })
  test('changeSelectedRoomId', async () => {
    const newState = messengerSlice(state, messengerActions.changeSelectedRoomId(2))
    expect(newState.selectedId).toBe(2)
  })
  test('addMessage', async () => {
    const message = { test: 'swallow', messageId: 819 }
    const newState = messengerSlice(state, messengerActions.addMessage(message as any))
    expect(newState.selectedId).toBe(null)
    expect(newState.messages).toContain(message)
  })
  test('clearRoom', async () => {
    expect(messengerSlice(state, messengerActions.clearRoom()).messages).toHaveLength(0)
  })
  test('changeRoomsFilter', async () => {
    const newState = messengerSlice(state, messengerActions.changeRoomsFilter('familiar'))
    expect(newState.rooms.filter).toBe('familiar')
  })
  test('setIsTyping', async () => {
    expect(state).toBeTruthy()
    const newState = messengerSlice(state, messengerActions.setIsTyping(false))
    expect(newState.isTyping).toBeFalsy()
  })
  test('changeUserStatus', async () => {
    expect(state.isTyping).toBeTruthy()
    const newState = messengerSlice(state, messengerActions.changeUserStatus(UserStatus.ONLINE))
    expect(newState.status).toBe(UserStatus.ONLINE)
    expect(newState.isTyping).toBeFalsy()
  })
  test('clearMessenger', async () => {
    expect(messengerSlice(state, messengerActions.clearMessenger())).toStrictEqual(initialState)
  })
})

