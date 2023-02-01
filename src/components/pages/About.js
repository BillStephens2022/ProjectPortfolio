import React from "react";
import "../../styles/About.css";

export default function About() {
  return (
    <div className="about-body row">
      <div className="col-4 d-flex align-items-center justify-content-center">
        <img
          className="bill-pic-1"
          src={`${process.env.PUBLIC_URL}/images/bill.jpeg`}
          alt="bill-pic"
        />
      </div>
      <div className="col-8 d-flex align-items-center">
        <div>
          <h1>Bill Stephens</h1>
          <h2>Full Stack Web Developer</h2>
          <p>Full Stack Web Developer with 25 year background in Finance/Accounting in
          the Investment Banking industry. I am looking to leverage by finance 
          background with my newly acquired programming skills. Let's build something together!</p>
        </div>
        
      </div>
    </div>
  );
}
