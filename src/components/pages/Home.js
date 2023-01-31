import React from "react";
import "../../styles/Home.css";

export default function Home() {
  return (
    <div className="home-body row">
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
        </div>
        
      </div>
    </div>
  );
}
