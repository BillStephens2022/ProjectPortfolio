import React from "react";
import "../../styles/About.css";

// 'About Me' landing page with a photo, name, and paragraph about me

export default function About() {
  return (
    <div className="about-body row">
      <div className="col-lg-4 col-sm-12 d-flex align-items-center justify-content-center">
        <img
          className="bill-pic-1"
          src={`${process.env.PUBLIC_URL}/images/bill.jpeg`}
          alt="bill-pic"
        />
      </div>
      <div className="col-lg-8 col-sm-12 d-flex align-items-center">
        <div class="about-div">
          <h1>Bill Stephens</h1>
          <h2>Full Stack Web Developer</h2>
          <p className="about-paragraph">
            Full Stack Web Developer with a 25 year background in
            Finance/Accounting in the Investment Banking industry. I am looking
            to leverage by finance background with my newly acquired programming
            skills. Let's build something together!
          </p>
        </div>
      </div>
    </div>
  );
}
