import React from 'react'
import {Link} from 'react-router-dom'

function Footer() {
    return (
        <div className="container border-top pt-5">
            <div className="row">
                <div className="col-3">
                    <img src="images/logo.svg" alt="Logo" style={{ width: "50%" }} />
                    <p>&copy; 2010 - 2025, Zerodha Broking Ltd. <br />
                        All rights reserved.</p>
                    <ul className='list-group d-flex flex-row border-0 mt-3'>
                        <li className='list-group-item border-0'>
                            <i className="fa-brands fa-x-twitter"></i>
                        </li>
                        <li className='list-group-item border-0'>
                            <i className="fa-brands fa-square-facebook"></i>
                        </li>
                        <li className='list-group-item border-0'>
                            <i className="fa-brands fa-instagram"></i>
                        </li>
                        <li className='list-group-item border-0'>
                            <i className="fa-brands fa-linkedin-in"></i>
                        </li>
                    </ul>
                    <hr />
                    <ul className='list-group d-flex flex-row border-0 mt-3'>
                        <li className='list-group-item border-0'>
                            <i className="fa-brands fa-youtube"></i>
                        </li>
                        <li className='list-group-item border-0'>
                            <i className="fa-brands fa-whatsapp"></i>
                        </li>
                        <li className='list-group-item border-0'>
                            <i className="fa-brands fa-telegram"></i>
                        </li>
                    </ul>

                </div>
                <div className=" footer col-3 d-flex flex-column">
                    <p style={{fontSize: "18px"}}>Company</p>
                    <Link className='text-decoration-none text-muted' to="/about">About</Link>
                    <Link className='text-decoration-none text-muted' to="/products">Products</Link>
                    <Link className='text-decoration-none text-muted' to="/pricing">Pricing</Link>
                    <Link className='text-decoration-none text-muted' to="/">Referral programme</Link>
                    <Link className='text-decoration-none text-muted' to="/">Careers</Link>
                    <Link className='text-decoration-none text-muted' to="/">Zerodha.tech</Link>
                    <Link className='text-decoration-none text-muted' to="/">Open source</Link>
                    <Link className='text-decoration-none text-muted' to="/">Press & media</Link>
                    <Link className='text-decoration-none text-muted' to="/">Zerodha Cares (CSR)</Link>
                </div>
                <div className="footer col-3 d-flex flex-column">
                    <p style={{fontSize: "18px"}}>Support</p>
                    <Link className='text-decoration-none text-muted' to="/">Contact us</Link>
                    <Link className='text-decoration-none text-muted' to="/support">Support portal</Link>
                    <Link className='text-decoration-none text-muted' to="/">Z-Connect blog</Link>
                    <Link className='text-decoration-none text-muted' to="/">List of charges</Link>
                    <Link className='text-decoration-none text-muted' to="/">Downloads & resources</Link>
                    <Link className='text-decoration-none text-muted' to="/">Videos</Link>
                    <Link className='text-decoration-none text-muted' to="/">Market overview</Link>
                    <Link className='text-decoration-none text-muted' to="/">How to file a complaint?</Link>
                    <Link className='text-decoration-none text-muted' to="/">Status of your complaints</Link>
                </div>
                <div className="footer col-3 d-flex flex-column">
                    <p style={{fontSize: "18px"}}>Account</p>
                    <Link className='text-decoration-none text-muted' to="/signup">Open an account</Link>
                    <Link className='text-decoration-none text-muted' to="/">Fund transfer</Link>
                </div>
            </div>
            <ul className=' footer-ul list-group d-flex flex-row justify-content-center border-0 pt-5 pb-2'>
                <li className='list-group-item border-0 text-muted'>NSE</li>
                <li className='list-group-item border-0 text-muted'>BSE</li>
                <li className='list-group-item border-0 text-muted'>MCX</li>
                <li className='list-group-item border-0 text-muted'>Terms & condition</li>
                <li className='list-group-item border-0 text-muted'>Policies & procedures</li>
                <li className='list-group-item border-0 text-muted'>Privacy policy</li>
                <li className='list-group-item border-0 text-muted'>Disclosure</li>
                <li className='list-group-item border-0 text-muted'>For investor's attention</li>
                <li className='list-group-item border-0 text-muted'>Investor charter</li>
            </ul>
        </div>
    );
}

export default Footer;