import React from "react";
import '../../styles/Resume.css';

export default function Resume() {
  return (
    <div className="container">
    <button className="btn btn-lg btn-primary download-button">Download</button>
    <div className="body-div resume-div">
      <div className="row">
        <div className="col-sm-4 col-md-3 col-lg-2 photo">
          <img className="bill-pic" src={`${process.env.PUBLIC_URL}/images/bill.jpeg`} alt="Bill pic" />
        </div>
        <div className="col-sm-8 col-md-9 col-lg-10 summary">
          <h1 className="header-name">Bill Stephens</h1>
          <h3 className="header-occupation">
            Full Stack Web Developer / Finance Professional
          </h3>
          <hr className="header-hr" />
          <h3 className="header-summary">
            {" "}
            Full Stack Web Developer with 25 year background in
            Finance/Accounting with Morgan Stanley and Credit
            Suisse. &nbsp;&nbsp;I am looking to leverage by finance background
            with my newly acquired programming skills. &nbsp;&nbsp;Strong problem
            solving and analytical skills with ability to multi-task in a high
            pressure environment.
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4 col-md-3 col-lg-2 contact-info-technical">
          <p className="icon contact-info">
            <i className="fa fa-envelope" aria-hidden="true"></i>
          </p>
          <p className="email contact-info contact-details">
            two4onebill@yahoo.com
          </p>
          <p className="icon contact-info">
            <i className="fa fa-mobile" aria-hidden="true"></i>
          </p>
          <p className="phone contact-info contact-details">(201)-850-7410</p>
          <p className="icon contact-info">
            <i className="fa fa-solid fa-location-dot"></i>
          </p>
          <p className="location contact-info contact-details">Toms River, NJ</p>
          <p className="icon contact-info">
            <i className="fa fa-brands fa-linkedin"></i>
          </p>
          <p className="linkedin contact-info contact-details">
            <a href="https://www.linkedin.com/in/bill-stephens-04375923/">
              {" "}
              LinkedIn Profile
            </a>
          </p>
          <p className="icon contact-info">
            <i className="fa fa-solid fa-diagram-project"></i>
          </p>
          <p className="portfolio contact-info contact-details">
            <a href="https://billstephens2022.github.io/Portfolio-Projects/">
              {" "}
              Portfolio/Projects
            </a>
          </p>
          <p className="icon contact-info">
            <i className="fa fa-brands fa-github"></i>
          </p>
          <p className="github contact-info contact-details">
            <a href="https://github.com/BillStephens2022"> Github</a>
          </p>
          <div className="technical-skills">
            <p className="section-headers">TECHNICAL SKILLS</p>
            <hr />
            <p className="skills-subheading">Programming</p>
            <ul>
              <li>HTML/CSS/Bootstrap</li>
              <meter max="120" value="100" title="GB"></meter>
              <li>JavaScipt / Node / React</li>
              <meter max="120" value="80" title="GB"></meter>
              <li>MongoDB / Mongoose / SQL</li>
              <meter max="120" value="70" title="GB"></meter>
            </ul>
            <p className="skills-subheading">
              Finance/
              <br />
              Accounting/
              <br />
              Other
            </p>
            <ul>
              <li>Loan IQ</li>
              <meter max="120" value="110" title="GB"></meter>
              <li>Accounting</li>
              <meter max="120" value="110" title="GB"></meter>
              <li>Loans</li>
              <meter max="120" value="110" title="GB"></meter>
              <li>Credit Derivatives</li>
              <meter max="120" value="110" title="GB"></meter>
              <li>Microsoft Excel</li>
              <meter max="120" value="100" title="GB"></meter>
              <li>Microsoft Word</li>
              <meter max="120" value="100" title="GB"></meter>
            </ul>
          </div>
        </div>
        <div className="col-sm-8 col-md-9 col-lg-10 section-headers">
          <h2 className="section-headers">WORK EXPERIENCE</h2>
          <hr />
          <div className="MorganStanley">
            <h3 className="company">
              <img className="MSLogo" src={`${process.env.PUBLIC_URL}/images/MSLogo.png`} alt="MS Logo" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;New York, NY
            </h3>
            <p className="role">Vice President - Relationship Lending Controller</p>
            <p className="time-range">May 2014 - May 2022</p>
            <ul className="work-bullets">
              <li>
                Managed a team of controllers across New York and Baltimore
                responsible for a roughly $90 billion global corportate loan
                portfolio
              </li>
              <li>
                Accounted for products including Revolving Credit Lines, Term
                Loans, Letters of Credit, and Credit Default Swap hedges
                including plain vanilla CDS, CDX index, and CDX index options.
              </li>
              <li>
                For the various products supported, responsible for overseeing:
              </li>
              <ul>
                <li>daily p&l production, analysis and commentary</li>
                <li>
                  month end reconciliation and signoff of General Ledger
                  balances
                </li>
                <li>
                  daily reporting and reconciliation of loan portfolio’s risk
                  management activity
                </li>
                <li>
                  P&L splits across multiple product areas due to joint venture
                  agreements
                </li>
              </ul>
              <li>
                Liase with the Business Unit to implement new products - this
                involves infrastructure setup, implementations of new controls
                and procedures, and adherence to accounting standards.
              </li>
              <li>
                Collaborate with various internal teams to support the business
                - i.e. Business Unit, Operations, Accounting Policy, Legal
                Entity controllers, Credit Risk management, Technology, Legal,
                Tax
              </li>
              <li>
                Ensure operational risks are identified and that controls are
                designed and performed effectively
              </li>
            </ul>
          </div>
          <div className="CreditSuisse">
            <h3 className="company">
              <img
                className="CSLogo"
                src={`${process.env.PUBLIC_URL}/images/CSLogo.png`}
                alt="Credit Suisse Logo"
              />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;New York, NY
            </h3>
            <p className="role">
              Director - Valuation Risk Group - Fair Value Control Team
            </p>
            <p className="time-range">Jan 2013 - Sep 2013</p>
            <ul className="work-bullets">
              <li>
                Managed a team responsible for centrally controlling the Fair
                Value disclosure processes and consolidating global Fair Value
                Disclosures across all businesses/products
              </li>
              <li>
                Participated in Quarterly Meetings with Product Heads to discuss
                significant changes in Fair Value balances and changes in
                leveling
              </li>
              <li>
                Provided Fair Value disclosure training to product controllers
                globally
              </li>
              <li>
                Communicated Fair Value disclosure requirements changes to
                Product Control globally as they occur
              </li>
              <li>
                Assumed a key role on project team working on improving the fair
                value disclosure process across the various businesses
              </li>
            </ul>
          </div>
          <div className="CreditSuisse">
            <p className="role">
              Director - Americas Head of Investment Banking Product Control
            </p>
            <p className="time-range">Oct 1996 - Dec 2012</p>
            <ul className="work-bullets">
              <li>
                Managed a team responsible for controlling the Global Corporate
                Lending, Loan Capital Markets, and Private Banking Lending,
                Mergers & Acquisitions, and Equity Capital Markets businesses
              </li>
              <li>
                Received a “Credit Suisse Award” for leading the Fair Value
                Option project for the Hold to Maturity loan portfolio which
                included getting infrastructure built, coordinating across
                various groups affected, and ensuring accounting policies and
                various GAAP (Swiss, US, and IFRS) requirements were met
              </li>
              <li>
                {" "}
                Subject Matter Expert for the “Loans Remediation Program” which
                is a strategic firmwide change initiative to automate and
                streamline accounting, p&l reporting, and various disclosures
                for loans. As a result of this program, we eliminated several
                thousand manual adjustments within my team alone.
              </li>
              <li>
                Product Control representative on the New Business committee for
                implementing new business ideas
              </li>
              <li>
                Product Control representative on the “Inventory Valuation
                Review” committee for the Corporate Bank lending portfolio. This
                is a committee of various risk and quant groups which meets
                monthly to discuss and resolve valuation issues.{" "}
              </li>
              <li>
                For the various products supported, responsible for overseeing:
              </li>
              <ul>
                <li>daily p&l production, analysis and commentary</li>
                <li>
                  month end reconciliation and signoff of General Ledger
                  balances
                </li>
                <li>
                  daily reporting and reconciliation of loan portfolio’s risk
                  management activity
                </li>
                <li>
                  P&L splits across multiple product areas due to joint venture
                  agreements
                </li>
                <li>Sarbanes-Oxley testing</li>
                <li>
                  production of various analytics and metrics provided into the
                  IVR process.
                </li>
              </ul>
              <li>
                Streamlined processes and established consistency globally
                around the reporting and accounting for various loan products
              </li>
              <li>
                Loan IQ accounting expert-led the migrations globally of Credit
                Suisse's loan accounting records to Loan IQ
              </li>
            </ul>
          </div>
          <div className="education">
            <h2 className="section-headers">EDUCATION</h2>
            <hr />

            <div className="row">
              <div className="col-sm-4 col-md-4 col-lg-5 degrees">
                <h3>Graduate and Undergraduate Degrees</h3>
                <br />
                <p className="degree">MBA, Professional Accounting</p>
                <p className="college">Rutgers University</p>
                <p className="time-range">1995-1996</p>
                <br />
                <p className="degree">B.S. Administration of Justice</p>
                <p className="college">Rutgers University</p>
                <p className="time-range">1990 - 1994</p>
              </div>
              <div className="col-sm-4 col-md-4 col-lg-5 degrees">
                <h3>Coding Bootcamps</h3>
                <br />
                <p className="degree">Rutgers Coding Bootcamp</p>
                <p className="college">Rutgers University</p>
                <p className="time-range">2022 - present</p>
                <br />
                <p className="degree">The Complete 2022 Web Development Bootcamp</p>
                <p className="college">Udemy, Instructor: Dr Angela Yu</p>
                <p className="time-range">2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
