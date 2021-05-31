import React from "react";
import "./LandingPage.css";
import "fullpage.js/vendors/scrolloverflow";
import ReactFullpage from "@fullpage/react-fullpage";
import Contact from "../Contact/Contact";
import About from "../About/About";
import Home from "../Home/Home";
import Work from "../Work/Work";
import WhyMe from "../WhyMe/WhyMe";

export default function LandingPage() {
  return (
    <ReactFullpage
      className="FullPage"
      licenseKey={""}
      scrollingSpeed={400}
      navigation={true}
      css3={true}
      fadingEffect={true}
      navigationPosition="right"
      showActiveTooltip={true}
      navigationTooltips={["Home", "About", "Work", "Why Me?", "Contact"]}
      anchors={[]}
      menu="#menu"
      render={({ state, fullpageApi }) => {
        return (
          <div className="FullPage">
            <div className="section">
              <Home />
            </div>
            <div className="section">
              <About />
            </div>
            <div className="section">
              <Work />
            </div>
            <div className="section">
              <WhyMe />
            </div>
            <div className="section">
              <Contact />
            </div>
          </div>
        );
      }}
    />
  );
}
