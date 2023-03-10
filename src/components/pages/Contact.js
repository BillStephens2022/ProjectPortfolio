import React, { useState } from "react";
import "../../styles/Contact.css";
import validateEmail from "../../utils/validators"

// Contact page with a form for sending an email message

export default function Contact() {
  const [errorMessage, setErrorMessage] = useState("");
  const [formState, setFormState] = useState({
    yourName: '',
    email: '',
    subject: '',
    message: ''
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log('submitted!');
  }

  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Please Enter a Valid Email");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required`);
      } else {
        setErrorMessage("");
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }
  return (
    <div className="container">
      <div className="contact-form">
        <div className="contact-image">
          <img src={`${process.env.PUBLIC_URL}/images/bill.jpeg`} alt="bill-pic" className="contact-pic"/>
        </div>
        <form>
          <h3>Drop Me a Message</h3>
          <h4><i className="fa-solid fa-envelope email-icon"></i>two4onebill@yahoo.com</h4>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Your Name *"
                  onBlur={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  placeholder="Your Email *"
                  onBlur={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  className="form-control subject"
                  placeholder="The Subject of your Email *"
                  onBlur={handleChange}
                />
              </div>
              <div className="form-group">
                <button
                  type="submit"
                  className="btnContact"
                  onSubmit={handleSubmit}
                > Send Message
                </button>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="form-group">
                <textarea
                  name="message"
                  className="form-control message"
                  placeholder="Your Message *"
                  style={{ width: "100%", height: "150px" }}
                  onBlur={handleChange}
                ></textarea>
              </div>
            </div>
            {errorMessage ? <p className="error-message">{errorMessage}</p> : null }
          </div>
        </form>
      </div>
      
    </div>
  );
}
