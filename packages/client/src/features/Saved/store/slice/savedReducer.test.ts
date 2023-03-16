import { JestRedux } from 'shared/lib/jest'
import { Store } from 'app/store/store'
import { savedInitialState, SavedSlice } from 'features/Saved/store/slice/initialState'
import { savedActions, savedSlice } from 'features/Saved'


describe('savedReducer', () => {
  const tests = new JestRedux()
  let store: Store
  let state: SavedSlice
  const initialState: SavedSlice = {
    ...savedInitialState,
    saved: [3, 4]
  }

  beforeEach(() => {
    store = tests.configureTestStore('saved', initialState)
    state = tests.createReducerState(store, 'saved')
  })

  test('addToSaved', () => {
    expect(savedSlice(state, savedActions.addToSaved(2)).saved).toHaveLength(3)
    expect(savedSlice(state, savedActions.addToSaved(2)).saved.at(-1)).toBe(2)
  })
  test('removeFromSaved', () => {
    expect(savedSlice(state, savedActions.removeFromSaved(2)).saved).toHaveLength(2)
    expect(savedSlice(state, savedActions.removeFromSaved(3)).saved).toHaveLength(1)
  })
  test('clearSavedProducts', () => {
    expect(savedSlice(state, savedActions.clearSavedProducts()).products).toHaveLength(0)
  })
  test('setSavedProducts', () => {
    expect(savedSlice(state, savedActions.setSavedProducts([1, 2, 3] as any)).products).toHaveLength(3)
  })
})

