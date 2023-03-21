import { UsersHeader, UsersList } from 'widgets/Users'
import { DynamicModuleLoader, WithSpring } from 'shared/lib/components'
import { usersSlice } from 'widgets/Users/store/slice/usersReducer'
import { RecommendedItems } from 'widgets/Products'
import { RecommendedMap, SortedProducts } from 'entities/Products'
import { ProductTypes } from 'shared/types/elements'
import { FindProductBanner, GithubBanner } from 'entities/Banners'
import { SearchProductsForm } from 'features/SearchPage'
import { ProductBannerForm } from 'entities/SearchPage'
import React from 'react'

const UsersPage = () => {
  return <WithSpring>
    <div className={'users'}>
      <UsersHeader/>
      <UsersList/>
    </div>
    <GithubBanner/>
    <RecommendedItems Component={SortedProducts} type={ProductTypes[4]}/>
    <RecommendedItems Component={SortedProducts} type={ProductTypes[3]}/>
    <FindProductBanner Form={<SearchProductsForm Component={ProductBannerForm}/>}/>
    <RecommendedItems Component={RecommendedMap}/>
  </WithSpring>
}

export const UsersWithReducer = () => {
  return <DynamicModuleLoader name={'users'} reducer={usersSlice}>
    <UsersPage/>
  </DynamicModuleLoader>
}


export default UsersWithReducer
