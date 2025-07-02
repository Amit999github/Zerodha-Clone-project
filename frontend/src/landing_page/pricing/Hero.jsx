import React from 'react'
import Price from './prices/Price';
function Hero() {
    return ( 
        <div className="container">
            <div className="row text-center" style={{ padding:"100px 0"}}>
                <h1 className='' style={{fontSize:"44px",lineHeight:"1"}}>Charges</h1>
                <p className='fs-5 text-muted mt-2 mb-3'>List of all charges and taxes</p>
            </div>
            <div className="row px-5 text-center">
                <Price
                img = "images/pricingMF.svg"
                 name = "Free equity delivery"
                 discription = "All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage."
                />
                <Price
                img = "images/pricing_20.svg"
                 name = "Intraday and F&O trades"
                 discription = "Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades."
                />
                <Price
                img = "images/pricingMF.svg"
                 name = "Free direct MF"
                 discription = "All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges."
                />
            </div>
        </div>
     );
}

export default Hero;