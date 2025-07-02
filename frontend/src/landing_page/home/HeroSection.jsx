import React from 'react'

function HeroSection() {
    return ( 
        <div className="container p-5 mb-5">
            <div className=" text-center">
                <img src="images/homeHero.png" alt="Home Hero" style={{ width : "60%"}} className='mb-5'/>
                <h1 className='mt-5'>Invest in everything</h1>
                <p style={{margin:"10px 0 15px"}}>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button style={{ width : "15%" , margin: "25px auto 0"}} className='p-2 btn btn-primary fs-5'>Signup for free</button>
            </div>
        </div>
     );
}

export default HeroSection;