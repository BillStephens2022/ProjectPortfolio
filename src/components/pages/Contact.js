import React, { useState } from "react";
import "../../styles/Contact.css";
import validateEmail from "../../utils/validators"

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
        setErrorMessage(`${e.target.name} is required.`);
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
          <img src="images/bill.jpeg" alt="bill-pic" />
        </div>
        <form>
          <h3>Drop Me a Message</h3>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  name="yourName"
                  className="form-control"
                  placeholder="Your Name *"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  placeholder="Your Email *"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  className="form-control"
                  placeholder="The Subject of your Email *"
                  onChange={handleChange}
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
            <div className="col-md-6">
              <div className="form-group">
                <textarea
                  name="message"
                  className="form-control"
                  placeholder="Your Message *"
                  style={{ width: "100%", height: "150px" }}
                  onChange={handleChange}
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
