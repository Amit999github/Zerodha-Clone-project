

function Pricing() {
    return (
        <div className="container p-5">
            <div className="row justify-content-center align-items-center">
                <div className="col-5 d-flex flex-column" style={{flex:"1"}}>
                    <h2 className="fs-2" style={{marginBottom:"20px"}}>Unbeatable pricing</h2>
                    <p className="fs-6" style={{margin:"16px 0 15px"}}>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                </div>
                <div className="col-7 d-flex justify-content-around p-0">
                    <div className="d-flex p-7 align-items-center">
                        <img src="images/pricingMF.svg" alt="pricing MF" style={{ width : "120px"}}/>
                        <p className="position-relative" style={{fontSize: "10px" ,height: "fit-content", width: "114px",left : "-16px", top:"-2px"}}>Free account<br />opening</p>
                    </div>
                    <div className="d-flex p-7 align-items-center">
                        <img  src="images/pricingMF.svg" alt="pricing MF" style={{ width : "120px"}} />
                        <p className="position-relative" style={{fontSize: "10px" , height: "fit-content" , width: "114px" ,left : "-16px", top:"-2px"}}>Free equity delivery <br /> and direct mutual funds</p>
                    </div>
                    <div className="d-flex p-7 align-items-center">
                        <img src="images/pricing_20.svg" alt=" pricing 20" style={{ width : "120px"}} />
                        <p className="position-relative" style={{fontSize: "10px" , height: "fit-content", width: "114px" , left : "-2px" , top:"-10px"}}>Intraday and <br /> F&O</p>
                    </div>
                </div>
            </div>
            <p style={{marginBottom:"15px", paddingLeft:"10px"}}><a href="" className="text-decoration-none" style={{fontSize:"16px"}}>See pricing &nbsp; <i className="fas fa-arrow-right"></i></a></p>
        </div>
    );
}

export default Pricing;