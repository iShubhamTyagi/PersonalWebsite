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
        </div>
        <ContactLottie />
      </div>
    </div>
  );
}
