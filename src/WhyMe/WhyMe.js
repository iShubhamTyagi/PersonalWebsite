import React from "react";
import "./WhyMe.css";
import { Button } from "@material-ui/core";
import { motion } from "framer-motion";
import WhyMeLottie from "../Lottie/WhyMeLottie/WhyMeLottie";
import Resume from "../WhyMe/ShubhamTyagi_Web_Developer.pdf";

export default function WhyMe() {
  const downloadResume = () => {
    var link = document.createElement("a");
    link.href = Resume;
    link.style = "visibility:hidden";
    link.download = "Shubham_Tyagi_Web_Developer" + ".pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
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
                  <h3>&ensp;➡ Myself</h3>
                  <h3>&ensp;➡ My Team</h3>
                  <h3>
                    &ensp;➡ Events :from surprise birthday parties to <br />
                    data collection event for Google Japan
                  </h3>
                </ul>
              </h3>
            </div>
            <div className="IndividualPoint">
              <h2>I make them look good:</h2>
              <h3>websites, recruiters and my supervisors.</h3>
            </div>
            <motion.div className="download">
              <Button onClick={downloadResume} variant="contained">
                Resume
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
