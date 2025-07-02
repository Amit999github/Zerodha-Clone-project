import React from 'react'

function NotFound() {
    return (
        <div className="container p-5 mb-5">
            <div className=" text-center">
                <h1 className='mt-5'>404</h1>
                <p style={{margin:"10px 0 15px"}}>Oops! Page not found.</p>
                <button style={{ width : "15%" , margin: "25px auto 0"}} className='p-2 btn btn-primary fs-5'>Go back to Home</button>
            </div>
        </div>
    );
}

export default NotFound;