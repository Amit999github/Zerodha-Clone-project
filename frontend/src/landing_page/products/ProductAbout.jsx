import React from 'react'
import { Link } from 'react-router-dom';

function ProductAbout() {
    return (
        <div className="container">
            <div className="row d-flex justify-content-center">
                <p className='fs-5 text-center'>Want to know more about our technology stack? Check out the <Link to="/" className='text-decoration-none'>Zerodha.tech</Link> blog.</p>
            </div>
        </div>
    );
}

export default ProductAbout;