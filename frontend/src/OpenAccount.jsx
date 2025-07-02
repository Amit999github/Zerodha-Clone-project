import React from 'react'

function OpenAccount() {
    return (
        <div className="container p-5 mb-5">
            <div className=" text-center">
                <h1 className='mt-5'>Open a Zerodha account</h1>
                <p style={{margin:"10px 0 15px"}}>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <button style={{ width : "15%" , margin: "25px auto 0"}} className='p-2 btn btn-primary fs-5'>Signup for free</button>
            </div>
        </div>
    );
}

export default OpenAccount;