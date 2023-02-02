import React from "react";
import "../styles/About.css";

export default function Footer() {
  return (
    
    <footer className="footer">
        <span className="footer-span">Contact me on:</span>
        <a href="https://github.com/BillStephens2022" className="footer-icon"><i className="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/bill-stephens-04375923/" className="footer-icon"><i className="fab fa-linkedin"></i></a>
        <a href="https://instagram.com/two4onebill?igshid=YmMyMTA2M2Y" className="footer-icon"><i className="fab fa-instagram"></i></a>
    </footer>
    
  );
}