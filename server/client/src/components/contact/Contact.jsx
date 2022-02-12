import React from "react";
import axios from "axios";
import { useState } from "react";
import swal from "sweetalert";
import "./contact.css";
const Form = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  function addContact() {
    axios
      .post("/contacts", {
        fullName: fullName,
        email: email,
        message: message,
      })
      .then(function (res) {
        console.log(res.data, "resData");
        swal({
          title: "Thank-you!",
          text: "Your Message Send Succsesfully",
          icon: "success",
          button: "Accept",
          timer: 2000,
        });
      })
      .catch(function (error) {
        console.log(error.res);
      });
  }
  return (
    <section className="contact">
      <h3 className="section-header">
        <b style={{ color: "red" }}>Contact</b>-Us
      </h3>
      <div className="contact-wrapper">
        <form className="contact-form" className="form-horizontal" role="form">
          <div className="form-group">
            <div className="col-sm-12">
              <input
                onChange={(e) => {
                  setFullName(e.target.value);
                }}
                type="text"
                className="form-control"
                id="name"
                placeholder="FULL-NAME"
                name="name"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <div className="col-sm-12">
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                className="form-control"
                id="email"
                placeholder="EMAIL"
                name="email"
                required
              />
            </div>
          </div>

          <textarea
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            className="form-control"
            rows="10"
            placeholder="MESSAGE"
            name="message"
            required
          ></textarea>

          <button
            onClick={(e) => {
              e.preventDefault();
              addContact();
            }}
            className="btn btn-danger send-button"
            id="submit"
            type="submit"
            value="SEND"
          >
            <div className="alt-send-button">
              <i class="fa fa-paper-plane"></i>
              <span className="send-text">SEND</span>
            </div>
          </button>
        </form>

        <div className="direct-contact-container">
          <ul className="contact-list">
            <li className="list-item">
              <i className="fa fa-map-marker fa-2x">
                <span className="contact-text place">Tel-Aviv, Israel</span>
              </i>
            </li>

            <li className="list-item">
              <i className="fa fa-phone fa-2x">
                <span className="contact-text phone">
                  <a href="tel:1-212-555-5555" title="Give me a call">
                    (972) 054-7302513
                  </a>
                </span>
              </i>
            </li>

            <li className="list-item">
              <i className="fa fa-envelope fa-2x">
                <span className="contact-text gmail">
                  <a href="mailto:#" title="Send me an email">
                    eliasmayan@gmail.com
                  </a>
                </span>
              </i>
            </li>
          </ul>
          <hr />
          <hr />
        </div>
      </div>
    </section>
  );
};

export default Form;
