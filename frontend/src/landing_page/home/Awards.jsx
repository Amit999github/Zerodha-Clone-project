import React from 'react'
function Awards() {
    return ( 
        <div className="container mt-5">
            <div className="row">
                <div className="col-6 p-5">
                    <img src="images/largestBroker.svg" alt=" largest Broker" />
                </div>
                <div className="col-6 p-5 mt-3">
                    <h1>Largest stoke broker in india</h1>
                    <p className='mb-4'>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>

                    <div className="row mt-5 mb-2">
                        <div className="col-6">
                            <ul>
                                <li><p>Future and Options</p></li>
                                <li><p>Commodity derivatives</p></li>
                                <li><p>Currency derivatives</p></li>
                            </ul>
                        </div>
                        <div className="col-6">
                        <ul>
                            <li><p>Stock and IPOs</p></li>
                            <li><p>Direct mutual Funds</p></li>
                            <li><p>Bonds and Govt. Security</p></li>
                        </ul>
                        </div>
                    </div>
                    <img src="images\pressLogos.png" alt=" pres logos" style={{width:"90%"}} />
                </div>
            </div>
        </div>
    );
}

export default Awards;