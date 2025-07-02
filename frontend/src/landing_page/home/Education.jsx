import React from 'react'

function Education() {
    return (
        <div className="container p-5">
            <div className="row align-items-center justify-content-between">
                <div className="col-5">
                    <img src="images/education.svg" alt="education img" style={{maxWidth:"100%"}}/>
                </div>
                <div className="col-6">
                    <h2 className="fs-2" style={{marginBottom:"20px"}}>Free and open market education</h2>
                    <p className="fs-6" style={{margin:"16px 0 15px"}}>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href="" className="fs-6 text-decoration-none">Varsity &nbsp; <i className="fas fa-arrow-right"></i></a>
                    <p className="fs-6" style={{margin:"30px 0 15px"}}>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href="" className="fs-6 text-decoration-none">TradingQ&A &nbsp; <i className="fas fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    );
}

export default Education;