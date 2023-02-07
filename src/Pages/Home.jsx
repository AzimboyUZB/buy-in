import React from 'react'
import { Banner, ProductListSlider } from '../components'
import Page from '../components/page/Page'
import Products from '../components/products/Products'
import Sponsor from '../components/Sponsor/Sponsor'

function Home() {

    return (
        <Page>
            <Banner />
            <Products />
            <ProductListSlider />
            <Sponsor />
            <ProductListSlider />
        </Page>
    )
}

export default Home