import React from "react";
import "./WhyMe.css";
import { Typography, Grid, Card, Paper } from "@material-ui/core";
import WhyMeLottie from "../Lottie/WhyMeLottie/WhyMeLottie";

export default function WhyMe() {
  return (
    <div className="WhyMePage">
      <div className="WhyMeBackground">
        <div className="WhyMeContents">
          <div>
            <h1>Why Me?</h1>
            <WhyMeLottie />
          </div>
          <div className="WhyMePoints">
            <div className="IndividualPoint">
              <h2>Consistent Growth</h2>
              <h3>
                In the first three years of my career i have grown:
                <br />
                Desktop ➡ Web Back-end ➡ Front-end ➡ Scrum Master
                <br /> The best is yet to come.
              </h3>
            </div>
            <div className="IndividualPoint">
              <h2>Organized</h2>
              <h3>
                I'm good at organizing:
                <ul>
                  <h3> Myself</h3>
                  <h3>My Team</h3>
                  <h3>
                    Events (from surprise Birthday Parties to Data Collection
                    Event for Google Japan (Find details in Resume) )
                  </h3>
                </ul>
              </h3>
            </div>
            <div className="IndividualPoint">
              <h2>I make them look good:</h2>
              <h3>Websites, recruiters and my supervisors.</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
