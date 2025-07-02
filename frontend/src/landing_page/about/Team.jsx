import React from "react";
import { Link } from "react-router-dom";

function Team() {
  return (
    <div className="container">
      <div
        className="row p-3 text-center"
        style={{fontSize: "2rem", lineHeight: "1.5" }}>
        <h2
          className="text-muted"
          style={{ fontSize: "2rem", lineHeight: "1.5" }}>
          People
        </h2>
      </div>
      <div className="row p-3  justify-content-evenly align-item-center">
        <div className="team-leader col-4 text-muted d-flex flex-column align-item-center">
            <img src="images\nithinKamath.jpg" alt=" nithin kamath" className=" rounded-circle" width="80%"/>
            <h5 className="fs-4 text-muted text-center">Nithin Kamath</h5>
            <p className="my-3 text-center">Founder, CEO</p>
        </div>
        <div
          className="col-6 text-muted"
          style={{ fontSize: "17px", lineHeight: "1.8" }}
        >
          <p className="mt-3 mb-3">
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p className="mt-3 mb-3">
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p className="mt-3 mb-3">Playing basketball is his zen.</p>
          <p className="mt-3 mb-3"> Connect on
            <a href="" className="text-decoration-none">
              Homepage
            </a>
            /
            <a href="" className="text-decoration-none">
              TradingQnA
            </a>
            /
            <a href="" className="text-decoration-none">
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
