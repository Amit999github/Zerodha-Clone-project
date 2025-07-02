import React from 'react'
import {Link} from 'react-router-dom'

function Hero() {
    return (
        <div className="container">
            <div className="row text-center" style={{padding: "7% 0", fontSize:"2rem", lineHeight:"1.5"}}>
                <h2 className='text-muted' style={{fontSize:"2rem", lineHeight:"1.5"}}>
                    We pioneered the discount broking model in India.
                    <br />
                    Now, we are breaking ground with our technology.
                </h2>
            </div>
            <div className="row p-5 border-top justify-content-evenly align-item-center">
                <div className="col-5 text-muted" style={{ fontSize:"17px",lineHeight:"1.8"}}>
                    <p className='mt-3 mb-3'>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.</p>
                    <p className='mt-3 mb-3'>Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.</p>
                    <p className='mt-3 mb-3'>Over 1+ Crore clients place millions of orders every day through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.</p>
                </div>
                <div className="col-5 text-muted"  style={{ fontSize:"17px",lineHeight:"1.8"}}>
                    <p className='mt-3 mb-3'>In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</p>
                    <p className='mt-3 mb-3'>
                    <a href="https://rainmatter.com/" className='text-decoration-none'>Rainmatter</a>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.
                    </p>
                    <p className='mt-3 mb-3'>
                    And yet, we are always up to something new every day. Catch up on the latest updates on our <Link to="/blog" className='text-decoration-none'>blog</Link> or see what the media is 
                    <Link to="/press-media" className='text-decoration-none'> saying about us.</Link> 
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Hero;