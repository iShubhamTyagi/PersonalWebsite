import React from "react";
import "./Home.css";
import { motion } from "framer-motion";
import HomeLottie from "../Lottie/HomeLottie/HomeLottie";

export default function About() {
  return (
    <div>
      <div className="HomePage">
        <div className="HomeBackground">
          <div className="Headline">
            <motion.div
              initial={{ y: "100vh" }}
              animate={{ y: "0" }}
              transition={{ type: "spring", duration: 1.5, bounce: 0.3 }}
            >
              <HomeLottie />
            </motion.div>
            <motion.h1
              initial={{ y: "100vh" }}
              animate={{ y: "0" }}
              transition={{ type: "spring", duration: 1.5, bounce: 0.3 }}
              className="MyName"
            >
              Shubham Tyagi{" "}
            </motion.h1>
            <motion.h3
              initial={{ x: "-100vh" }}
              animate={{ x: "0" }}
              transition={
                ({
                  type: "spring",
                  delay: 1.5,
                  duration: 0.5,
                  bounce: 0.3,
                },
                { type: "spring", delay: 1.5, duration: 0.5, bounce: 0.3 })
              }
              className="MyIntro"
            >
              Web developer, Scrum Master, Design Enthusiast
            </motion.h3>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ x: "100vh" }}
        animate={{ x: "0" }}
        transition={{
          type: "spring",
          delay: 1.5,
          duration: 0.5,
          bounce: 0.3,
        }}
        className="Intro"
      >
        <h3>
          Started from desktops but now I'm here.
          <br />
          I like to make my websites, elegant,
          <br /> my team, more efficient
          <br /> and my coffee stronger.
        </h3>
      </motion.div>
    </div>
  );
}
