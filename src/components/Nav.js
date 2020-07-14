import React from "react";
import "./SharedStyle.css";
import "./NavStyle.css";
import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();


function Nav(props) {




  const handleScroll = () => {
    // check that this is a relatively modern browser
    if (window.XMLHttpRequest) {
      let aboutBounds = document.getElementById("about").getBoundingClientRect();
      document.getElementById("navigation").className =
        aboutBounds.top <= 0 ? "fixed" : "";
        document.querySelector("body").className =
        aboutBounds.top <= 0 ? "padding" : "";
    }
  };

  // add the scroll event listener
  if (window.addEventListener) {
    window.addEventListener("scroll", handleScroll, false);
  } else {
    window.attachEvent("onscroll", handleScroll);
  }






  const scrollHome = () =>
    document.getElementById("home").scrollIntoView({ behavior: "smooth" });
  const scrollAbout = () =>
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  const scrollProjects = () =>
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  const scrollContact = () =>
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });

  return (
    <div id="navigation">
      <div className="navOptions">
        <div
        id="homeOpt"
          
          onClick={() => {
            scrollHome();
          }}
        >
          Home
        </div>
        <div
        id="aboutOpt"
          
          onClick={() => {
            scrollAbout();
          }}
        >
          About
        </div>
        <div
        id="projectsOpt"
          
          onClick={() => {
            scrollProjects();
          }}
        >
          Projects
        </div>
        <div
        id="contactOpt"
          
          onClick={() => {
            scrollContact();
          }}
        >
          Contact
        </div>
      </div>
    </div>
  );
}

export default Nav;
