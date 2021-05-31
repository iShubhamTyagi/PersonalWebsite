import React from "react";
import "./Contact.css";
import { Typography } from "@material-ui/core";
import ContactLottie from "../Lottie/ContactLottie";

export default function Contact() {
  return (
    <div className="ContactCardArea">
      <div className="ContactCard">
        <div className="ContactCard-info">
          <h1 className="MyName">Shubham Tyagi </h1>
          <h2 className="MyEmail">ishubhamtyagi2021@gmail.com</h2>
          <div className="icons-social">
            <a href="https://github.com/iShubhamTyagi" target="_blank">
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/shubham-tyagi-937a1b147"
              target="_blank"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
        {/* <ContactLottie /> */}
      </div>
    </div>
  );
}
