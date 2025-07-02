import React from "react";
import TicketList from "./TicketList/TicketList";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row pt-4 d-flex justify-content-evenly">
        <h2
          className="text-muted"
          style={{
            fontSize: "20px",
            marginBottom: "3.5rem",
            fontWeight: "400",
            paddingLeft: "7%",
          }}
        >
          To create a ticket, select a relevant topic
        </h2>
        <div className="col-3 d-flex flex-column text-start">
          <h3 style={{ fontSize: "18px", fontWeight: "400" }}>
            <i className="fa-solid fa-circle-plus"></i> Account Opening{" "}
          </h3>
          <TicketList ticket={"Resident individual"} />
          <TicketList ticket={"Minor"} />
          <TicketList ticket={"Non Resident Indian (NRI)"} />
          <TicketList ticket={"Company, Partnership, HUF and LLP"} />
          <TicketList ticket={"Glossary"} />
        </div>
        <div className="col-3 d-flex flex-column text-start">
          <h3 style={{ fontSize: "18px", fontWeight: "400" }}>
            <i className="fa-solid fa-user"></i> Your Zerodha Account
          </h3>
          <TicketList ticket={"Your Profile"} />
          <TicketList ticket={"Account modification"} />
          <TicketList ticket={"Client Master Report (CMR) and Depository Participant (DP)"} />
          <TicketList ticket={"Nomination"} />
          <TicketList ticket={"Transfer and conversion of securities"} />
        </div>
        <div className="col-3 d-flex flex-column text-start">
          <h3 style={{ fontSize: "18px", fontWeight: "400" }}>
            <i className="fa-solid fa-lines-leaning"></i> Kite
          </h3>
          <TicketList ticket={"IPO"} />
          <TicketList ticket={"Account modification"} />
          <TicketList ticket={"Trading FAQs"} />
          <TicketList ticket={"Margin Trading Facility (MTF) and Margins"} />
          <TicketList ticket={"Charts and orders"} />
          <TicketList ticket={"Alerts and Nudges"} />
          <TicketList ticket={"General"} />
        </div>
      </div>
      <div className="row pt-5 pb-4 mb-5 d-flex justify-content-evenly">
        <div className="col-3 d-flex flex-column text-start">
          <h3 style={{ fontSize: "18px", fontWeight: "400" }}>
          <i className="fa-solid fa-money-check-dollar"></i> Funds
          </h3>
          <TicketList ticket={"Add money"} />
          <TicketList ticket={"Withdraw money"} />
          <TicketList ticket={"Add bank accounts"} />
          <TicketList ticket={"eMandates"} />
        </div>
        <div className="col-3 d-flex flex-column text-start">
          <h3 style={{ fontSize: "18px", fontWeight: "400" }}>
          <i className="fa-solid fa-circle-notch"></i> Console
          </h3>
          <TicketList ticket={"Portfolio"} />
          <TicketList ticket={"Corporate actions"} />
          <TicketList ticket={"Funds statement"} />
          <TicketList ticket={"Reports"} />
          <TicketList ticket={"Profile"} />
          <TicketList ticket={"Segments"} />
        </div>
        <div className="col-3 d-flex flex-column text-start">
          <h3 style={{ fontSize: "18px", fontWeight: "400" }}>
          <i className="fa-solid fa-coins"></i> Coin
          </h3>
          <TicketList ticket={"Understanding mutual funds and Coin"} />
          <TicketList ticket={"Coin app"} />
          <TicketList ticket={"Coin web"} />
          <TicketList ticket={"Transactions and reports"} />
          <TicketList ticket={"National Pension Scheme (NPS)"} />
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
