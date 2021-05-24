import React from "react";
import Particles from "../ParticlesBackground/ParticlesBackground";
import "./LandingPage.css";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Experience from "../Experience/Experience";
import { Grow } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import NavigationBar from "../NavigationBar/NavigationBar";

export default function LandingPage() {
  return (
    <div className="LandingPage">
      <Particles />
      <CenterTile className="centerTitle"></CenterTile>
    </div>
  );
}

function CenterTile() {
  return (
    <div className="center_all">
      <div>
        <NavigationBar />
        <Router>
          <Switch>
            <Grow in>
              <div>
                <Route exact path="/About" component={About} />
                <Route exact path="/Contact" component={Contact} />
                <Route exact path="/Experience" component={Experience} />
              </div>
            </Grow>
          </Switch>
        </Router>
      </div>
    </div>
  );
}
