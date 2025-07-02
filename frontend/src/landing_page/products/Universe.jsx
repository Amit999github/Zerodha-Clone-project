import React from "react";

function Universe() {
  return (
    <div className="container pt-5 mt-5 text-center">
        <div className="row text-center">
            <h2 className=" m-0 pb-4"  style={{fontSize: "34px",fontWeight:500, lineHeight:"1.8"}}>The Zerodha Universe</h2>
            <p className=" mt-2 mb-3" style={{fontSize: "18px",fontWeight:400, lineHeight:"1.8"}}>
            Extend your trading and investment experience even further with our
            partner platforms
            </p>
        </div>
        <div className="row mt-3 pt-3 d-flex justify-content-around">
            <div className="col-3">
                <div className="row d-flex flex-column text-center">
                    <img src="images/zerodhaFundhouse.png" className="mt-3"  alt="" style={{width:"85%", marginLeft:"25px"}}/>
                    <p className="text-muted text-center p-0" style={{fontSize:"12px", marginTop:"10px"}}>
                    Our asset management venture
                    <br />
                    that is creating simple and transparent index
                    <br />
                    funds to help you save for your goals.
                    </p>
                </div>
            </div>
            <div className="col-3">
            <div className="row d-flex flex-column">
                <img src="images/sensibullLogo.svg" alt="" style={{width:"95%", marginLeft:"25px", marginTop:"20px"}}/>
                <p className="text-muted text-center p-0" style={{fontSize:"12px", marginTop:"10px"}}>
                Our asset management venture
                <br />
                that is creating simple and transparent index
                <br />
                funds to help you save for your goals.
                </p>
            </div>
            </div>
            <div className="col-3">
            <div className="row d-flex flex-column">
                <img src="images/tijori.svg" alt="" style={{width:"95%", marginLeft:"25px",}}/>
                <p className="text-muted text-center p-0" style={{fontSize:"12px", marginTop:"10px"}}>
                Our asset management venture
                <br />
                that is creating simple and transparent index
                <br />
                funds to help you save for your goals.
                </p>
            </div>
            </div>
        </div> 
        <div className="row mt-3 pt-3 d-flex justify-content-around">
            <div className="col-3">
                <div className="row d-flex flex-column">
                    <img src="images/streakLogo.png" alt="" style={{width:"85%", marginLeft:"25px"}}/>
                    <p className="text-muted text-center p-0" style={{fontSize:"12px", marginTop:"10px"}}>
                    Our asset management venture
                    <br />
                    that is creating simple and transparent index
                    <br />
                    funds to help you save for your goals.
                    </p>
                </div>
            </div>
            <div className="col-3">
            <div className="row d-flex flex-column">
                <img src="images/smallcaseLogo.png" alt="" style={{width:"85%", marginLeft:"25px"}}/>
                <p className="text-muted text-center p-0" style={{fontSize:"12px", marginTop:"10px"}}>
                Our asset management venture
                <br />
                that is creating simple and transparent index
                <br />
                funds to help you save for your goals.
                </p>
            </div>
            </div>
            <div className="col-3">
            <div className="row d-flex flex-column">
                <img src="images/dittoLogo.png" alt="" style={{width:"85%", marginLeft:"25px"}}/>
                <p className="text-muted text-center p-0"  style={{fontSize:"12px", marginTop:"10px"}}>
                Our asset management venture
                <br />
                that is creating simple and transparent index
                <br />
                funds to help you save for your goals.
                </p>
            </div>
            </div>
        </div> 
        <button style={{ width : "15%" , margin: "40px auto 80px"}} className='p-2 btn btn-primary fs-5'>Signup for free</button>
    </div>
  );
}

export default Universe;
