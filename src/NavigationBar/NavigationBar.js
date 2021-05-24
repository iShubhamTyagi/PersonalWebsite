import React from "react";
import "./NavigationBar.css";
import { Breadcrumbs, Link } from "@material-ui/core";

export default function NavigationBar(props) {
  return (
    <div className="card">
      <div className="card-info">
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/About">
            About
          </Link>
          <Link color="inherit" href="Experience">
            Experience
          </Link>
          <Link color="inherit" href="Contact">
            Contact
          </Link>
        </Breadcrumbs>
      </div>
    </div>
  );
}
