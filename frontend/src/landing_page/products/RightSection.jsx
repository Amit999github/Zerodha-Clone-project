import React from 'react'

function RightSection({imgURl , prodName , prodDesp , tryDemo}) {
    return (
        <div className="container">
            <div className="row pb-5 justify-content-evenly align-item-center">
                <div className="col-3 d-flex flex-column justify-content-center">
                    <h2 className='fs-2' style={{marginBottom:"20px"}}>{prodName}</h2>
                    <p className='my-3' style={{fontSize: "18px",lineHeight:"1.8"}}>{prodDesp}</p>
                    <div className='d-flex justify-content-start align-item-center'>
                        <a href={tryDemo} className='text-decoration-none' style={{fontSize:"17px"}}>Try demo &nbsp;<i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
                <div className="col-6">
                    <img src={imgURl} alt="img" style={{width: "100%"}}/>
                </div>
            </div>
        </div>
    );
}

export default RightSection;