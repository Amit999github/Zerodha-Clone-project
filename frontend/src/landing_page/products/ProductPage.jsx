import React from 'react'

import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';
import Hero from './Hero';
import ProductAbout from './productAbout';


function ProductPage() {
    return ( 
        <>
        <Hero/>
        <LeftSection
        imgURl="images/kite.png"
        prodName="Kite"
        prodDesp="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." 
        tryDemo="" 
        learnMore="" 
        googlePlay="" 
        appStore="" 
        />
        <RightSection
        imgURl="images/console.png"
        prodName="Console"
        prodDesp="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." 
        tryDemo=""         
        />
        <LeftSection
        imgURl="images/coin.png"
        prodName="Coin"
        prodDesp="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." 
        tryDemo="" 
        googlePlay="" 
        appStore="" 
        />
        <RightSection
        imgURl="images/kiteconnect.png"
        prodName="Kite Connect API"
        prodDesp="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." 
        tryDemo=""         
        />
        <LeftSection
        imgURl="images/varsity.png"
        prodName="Varsity mobile"
        prodDesp="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." 
        tryDemo="" 
        googlePlay="" 
        appStore="" 
        />
        <ProductAbout/>
        <Universe/>
        </>
     );
}

export default ProductPage;