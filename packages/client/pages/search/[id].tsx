import Head from "next/head";
import {GithubBanner, ProductParams, YouMayLike} from "components/pages/product";
import {ExtraServices, Recommended} from "components/pages/main";
import {ProductInfo} from "widgets/ProductPage/ProductInfo";


const ProductPage = () => {
    return <div>
        <Head>
            <title>Adonis - [Item]</title>
        </Head>
        <h2 className={'search_head'}>Home {'>'} Search {'>'} [Item]</h2>
        <ProductInfo/>
        <div className="product_page">
            <ProductParams/>
            <YouMayLike/>
        </div>
        <Recommended/>
        <GithubBanner/>
        <ExtraServices/>
    </div>
}

export default ProductPage
