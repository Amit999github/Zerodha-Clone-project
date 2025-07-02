import React, { useState } from 'react'

function Hero() {
    const [query, setQuery] = useState("");

    const searchListen = (e) =>{
        setQuery(e.target.value);
    }
    return (
        <div className='support'>
        <div className="container">
            <div className="row  pb-5 d-flex justify-content-evenly">
                <div className="col-3">
                 <a href="" className='text-white text-decoration-none fs-5' style={{fontWeight:"400"}}>Support Protal</a>   
                </div>
                <div className="col-3"></div>
                <div className="col-3">
                    <a href="" className='text-white text-decoration-none fs-6 border-bottom' style={{fontWeight:"400"}}>Track tickets</a>
                </div>
            </div>
            <div className=" con-inp row d-flex">
                <div className="col-6">
                    <h2 className='support-head'>Search for an answer or browse help topics to create a ticket</h2>
                    <div className="inputBox bg-white" style={{padding:"10px 10px 10px 2px", margin:"0 0 15px"}}>
                        <input 
                        type="text"
                        onChange={searchListen} 
                        placeholder='Eg: how do i activate F&O, why is my order getting rejected ...' 
                        name="" 
                        id="" 
                        className='text-muted ps-3'
                        />
                        <span><i className="fa-solid fa-magnifying-glass"></i></span>
                    </div>
                    <div className="related-links ">
                        <a href="" className='text-white text-decoration-none fs-6 border-bottom pb-2'>Track account opening</a>
                        <a href="" className='text-white text-decoration-none fs-6 border-bottom pb-2'>Track segment activation</a>
                        <a href="" className='text-white text-decoration-none fs-6 border-bottom pb-2'>Intraday margins</a>  
                        <a href="" className='text-white text-decoration-none fs-6 border-bottom pb-2'>Kite user manual</a>
                    </div>
                </div>
                <div className="col-4">
                <h2 className='support-head'>Featured</h2>
                <ol>
                    <li>
                        <a href="" className='fs-6 text-white'>
                        Change in expiry day of NSE derivative contracts from April 04, 2025 [Withheld]
                        </a>
                    </li>
                    <li>
                        <a href="" className='fs-6 text-white'>
                        Trading holiday on account of Dr. Baba Saheb Ambedkar Jayanti on April 14, 2025
                        </a>
                    </li>
                </ol>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Hero;