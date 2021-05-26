import React from "react";
import "./WhyMe.css";
import { Typography, Grid, Card, Paper } from "@material-ui/core";

export default function WhyMe() {
  return (
    <div className="WhyMePage">
      <div className="WhyMeBackground">
        <div className="WhyMeContents">
          <h1>Why Me?</h1>
          <div className="WhyMePoints">
            <div className="IndividualPoint">
              <h2>Consistent Growth</h2>
              <h3>
                In the first three years of my career i have grown:
                <br />
                Desktop applications ➡ Web Development Backend ➡ Front end ➡
                Scrum Master ➡ More to come
              </h3>
            </div>
            <div className="IndividualPoint">
              <h2>Organized</h2>
              <h3>
                I'm good at organizing:
                <ul>
                  <h3> Myself</h3>
                  <h3>My Team, as a Scrum Master</h3>
                  <h3>
                    Events (from surprise Birthday Parties in 30 minutes to{" "}
                    <br /> a Week long Audio Data Collection Event for Google
                    Japan (Find details in Resume) )
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
