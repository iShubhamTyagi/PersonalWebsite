import React from "react";
import "./Home.css";
import HomeLottie from "../Lottie/HomeLottie/HomeLottie";

export default function About() {
  return (
    <div>
      <div className="HomePage">
        <div className="HomeBackground">
          <div className="Headline">
            <HomeLottie />
            <h1 className="MyName">Shubham Tyagi </h1>
            <h3 className="MyIntro">
              Web developer, Scrum Master, Design Enthusiast
            </h3>
          </div>
        </div>
      </div>
      <div className="Intro">
        <h3>
          Started from desktops but now I'm here.
          <br />
          I like to make my websites, elegant,
          <br /> my team, more efficient
          <br /> and my coffee stronger.
        </h3>
      </div>
    </div>
  );
}
