import React from "react";
import "./NavigationBar.css";

export default function NavigationBar(props) {
  return (
    <div>
      <ul id="menu">
        <li data-menuanchor="Home">
          <a>Home</a>
          <br />
        </li>
        <li data-menuanchor="About">
          <a>About</a>
        </li>
        <li data-menuanchor="Work">
          <a>Work</a>
        </li>
        <li data-menuanchor="WhyMe?">
          <a>Why Me?</a>
        </li>
        <li data-menuanchor="Contact">
          <a>Contact</a>
        </li>
      </ul>
    </div>
  );
}
