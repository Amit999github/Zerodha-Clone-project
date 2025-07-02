
function State() {
    return ( 
        <div className="container p-5">
            <div className="row justify-content-between align-items-center">
                <div className="col-6 p-4">
                    <h2 className="mb-5" style={{ fontSize:"2rem"}}>Trust with confidence</h2>
                    <div className="why-us-section">
                        <h3>Customer-first always</h3>
                        <p className="text-muted">That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                    </div>
                    <div className="why-us-section">
                        <h3>No spam or gimmicks</h3>
                        <p className="text-muted">No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                    </div>
                    <div className="why-us-section">
                        <h3>The Zerodha universe</h3>
                        <p className="text-muted">Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    </div>
                    <div className="why-us-section">
                        <h3>Do better with money</h3>
                        <p className="text-muted">With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                    </div>
                </div>
                <div className="col-6 p-4">
                    <img src="images\ecosystem.png" alt=" ecosystem" style={{width: "90%"}} className="mt-3 mb-3" />
                    <div className="text-center">
                        <a href="" className="mr-5 text-decoration-none" style={{fontSize : "16px"}}>Explore our products &nbsp; <i className="fas fa-arrow-right"></i></a>
                        &nbsp;&nbsp;&nbsp;  
                        <a href="" className="mr-5 text-decoration-none" style={{fontSize : "16px"}}>Try Kite Demo &nbsp; <i className="fas fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default State;