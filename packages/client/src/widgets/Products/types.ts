import {
  ProductFeatures,
  ProductModels,
  ProductRatings,
  ProductSizes,
  ProductTypes
} from 'shared/types/elements/productTypes'
import { AxiosResponse as Res, KeyOf, Nullable, ObjectNullable } from 'shared/types/common'
import { Product } from './store/slice/initialState'
import { CurrentProductSlice } from 'widgets/CurrentProduct'

export interface AddProductForm {
    name: string
    description: string
    design: string
    rating: ProductRatings,
    inStock: boolean,
    price: number,
    warrantyCount: number,
    type: typeof ProductTypes,
    model: typeof ProductModels,
    size: typeof ProductSizes,
    features: typeof ProductFeatures,
    images: File[],
    material: string
}

export interface SearchControlsForm{
    size: KeyOf<typeof ProductSizes>,
    model: KeyOf<typeof ProductModels>,
    type: KeyOf<typeof ProductTypes>,
    rating: ProductRatings
}

export interface SearchQuery extends SearchControlsForm{
    search: string,
    page: number,
    inStock: boolean
}

export interface ProductsWithCount {
    data: Product[],
    count: number
}

export interface ProductsApi {
    addProduct(formValues: AddProductForm): Res<Product>

    setProductImages(id: number, formData: FormData): Res<Product>,

    userProducts(id: number, page: Nullable<number>): Res<ProductsWithCount>

    getProducts(filter: ObjectNullable<SearchQuery>): Res<ProductsWithCount>

    recommended(filter: Partial<SearchControlsForm>): Res<Product[]>

    getProduct(id: number): Res<CurrentProductSlice>

    getCartProducts(ids: number[]): Res<Product[]>
}
