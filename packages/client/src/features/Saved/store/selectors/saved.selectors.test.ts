import { JestRedux } from 'shared/lib/jest'
import { Store } from 'shared/types/redux'
import { SavedSlice } from 'features/Saved'
import SavedSelectors from 'features/Saved/store/selectors/saved.selectors'


describe('SavedSelectors', () => {
  const tests = new JestRedux()
  let store: Store
  let state: SavedSlice
  const initialState: Partial<SavedSlice> = {
    saved: [2, 3, 4],
    products: [4, 5, 6] as any
  }

  beforeEach(() => {
    store = tests.configureTestStore('saved', initialState)
    state = tests.createReducerState(store, 'saved')
  })

  test('saved', () => {
    expect(SavedSelectors.saved(tests.selector('saved', state))).toStrictEqual(state.saved)
  })
  test('isInSaved', () => {
    expect(SavedSelectors.isInSaved(3)(tests.selector('saved', state))).toBeTruthy()
    expect(SavedSelectors.isInSaved(5)(tests.selector('saved', state))).toBeFalsy()
  })
  test('products', () => {
    expect(SavedSelectors.products(tests.selector('saved', state))).toStrictEqual([4, 5, 6])
    expect(SavedSelectors.products(tests.selector('saved', state))).toStrictEqual([4, 5, 6])
  })
  test('count', () => {
    expect(SavedSelectors.count(tests.selector('saved', state))).toStrictEqual(3)
    state.saved.push(7)
    expect(SavedSelectors.count(tests.selector('saved', state))).toStrictEqual(4)
  })
  test('isLoading', () => {
    expect(SavedSelectors.isLoading(tests.selector('saved', state))).not.toBeDefined()
  })
})

