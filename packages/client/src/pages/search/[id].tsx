import Head from "next/head";
import {ProductInfo} from "widgets/ProductPage/ProductInfo";
import {ProductDescription} from "entities/ProductPage/ProductDescription";
import {Recommended, YouMayLike} from "widgets/SearchLists";
import {ExtraServices} from "entities/Banners/ExtraServices";
import {GithubBanner} from "entities/Banners/GithubBanner";
import {WithSpring} from "shared/lib/animations";


const ProductPage = () => {
    return <WithSpring>
        <Head>
            <title>Adonis - [Item]</title>
        </Head>
        <h2 className={'search_head'}>Home {'>'} Search {'>'} [Item]</h2>
        <ProductInfo/>
        <div className="product_page">
            <ProductDescription/>
            <YouMayLike/>
        </div>
        <Recommended/>
        <GithubBanner/>
        <ExtraServices/>
    </WithSpring>
}

export default ProductPage
