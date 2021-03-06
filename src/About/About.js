import React from "react";
import "./About.css";
import { Typography, Grid, Card, Paper } from "@material-ui/core";
import AboutLottie from "../Lottie/AboutLottie/AboutLottie";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="AboutPage">
      <div className="AboutBackground">
        <div className="AboutContents">
          <motion.h1
            initial={{ y: "100vh" }}
            animate={{ y: "0" }}
            transition={{ type: "spring", duration: 1.5, bounce: 0.3 }}
            className="Education Headers"
          >
            Skills
          </motion.h1>
          <div className="AboutLottie">
            <AboutLottie />
          </div>
          <Grid className="AboutDetails" container spacing={3}>
            <Grid item xs={12} sm={6}>
              <div className="EducationBlock">
                <h3 className="Headers">M.B.A. (Working Executive)</h3>
                <h5>(2021-2022)</h5>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className="EducationBlock">
                <h3 className="Headers">B.E. - Computer Science Engineering</h3>
                <h5>(2013-2017)</h5>
              </div>
            </Grid>
            <Grid item xs={6} sm={3}>
              <div className="ExperienceBlock">
                <h2 className="EperienceYears">3+ Years</h2>
                <h3>
                  C#, ASP.NET Core,
                  <br /> NUnit, NSubstitute,
                  <br />
                  Postman
                </h3>
              </div>
            </Grid>
            <Grid item xs={6} sm={3}>
              <div className="ExperienceBlock">
                <h2 className="EperienceYears">2+ Years</h2>
                <h3>
                  React.js, JavaScript,
                  <br />
                  TypeScript, <br /> Jest
                </h3>
              </div>
            </Grid>

            <Grid item xs={6} sm={3}>
              <div className="ExperienceBlock">
                <h2 className="EperienceYears">3+ Years</h2>
                <h3>
                  SQL
                  <br />
                  MongoDB
                  <br />
                  Entity Framework Core
                </h3>
              </div>
            </Grid>
            <Grid item xs={6} sm={3}>
              <div className="ExperienceBlock">
                <h2 className="EperienceYears">3+ Years</h2>
                <h3>
                  SOLID,
                  <br />
                  TDD, BDD,
                  <br />
                  SCRUM
                </h3>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}
