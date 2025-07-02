import React from 'react'
import {Link} from "react-router-dom"

function Hero() {
    return (
        <div className="container border-bottom p-5 mb-5">
            <div className=" text-center">
                <h1 className='mt-5' style={{fontSize:"44px"}}>Zerodha Products</h1>
                <p className='fs-5 text-muted' style={{margin:"10px 0 15px"}}>Sleek, modern, and intuitive trading platforms</p>
                <p className='mt-3 mb-3' style={{ fontSize:"18px",lineHeight:"1.8", fontWeight:"400"}}>
                    Check out our <Link className='text-decoration-none'>investment offerings 
                    &nbsp; <i className="fa-solid fa-arrow-right"></i></Link>
                </p>
            </div>
        </div>
    );
}

export default Hero;