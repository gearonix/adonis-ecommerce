import { JestAsyncThunk } from 'shared/lib/jest'
import { addProduct } from './addProduct'
import { AddProductForm } from 'widgets/Products/types'
import { getUserProducts } from 'widgets/Products'

describe('addProduct', () => {
  let args: Partial<AddProductForm>
  let thunk: JestAsyncThunk<void, AddProductForm, string>
  beforeEach(() => {
    args = {
      name: 'multiply',
      description: 'confuse',
      design: 'paper',
      images: [
        new File(['foo'], 'foo.txt', {
          type: 'text/plain'
        }),
        new File(['foo'], 'foo.txt', {
          type: 'text/plain'
        })
      ]
    }
    thunk = new JestAsyncThunk(addProduct, 'products')
  })

  test('addProduct success with both api calls', async () => {
    const res = {
      productId: 68
    }
    await thunk.mock<'products'>('addProduct', res)
    await thunk.mock<'products'>('setProductImages')
    const { dispatch, api, status, payload } = await thunk.call(args as AddProductForm)

    expect(api.addProduct).toHaveBeenCalled()
    expect(api.setProductImages).toHaveBeenCalled()
    expect(status).toBe('fulfilled')
    expect(payload).not.toBeDefined()
    expect(dispatch).toBeCalled()
  })
  test('addProduct without image parameter', async () => {
    const res = {
      productId: 68
    }
    delete args.images
    await thunk.mock<'products'>('addProduct', res)
    await thunk.mock<'products'>('setProductImages')
    const { api, status, payload } = await thunk.call(args as AddProductForm)

    expect(api.addProduct).not.toHaveBeenCalled()
    expect(api.setProductImages).not.toHaveBeenCalled()
    expect(status).toBe('rejected')
    expect(payload).not.toBeDefined()
  })
  test('addProduct error', async () => {
    await thunk.errorMock<'products'>('addProduct')
    await thunk.mock<'products'>('setProductImages')
    const { status, api, payload, dispatch } = await thunk.call(args as AddProductForm)

    expect(status).toBe('rejected')
    expect(api.addProduct).toHaveBeenCalled()
    expect(dispatch).toBeCalled()
    expect(api.setProductImages).not.toHaveBeenCalled()
    expect(payload).toBe('An error occurred.')
  })
})

