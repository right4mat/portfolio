import React from "react";
import "./SharedStyle.css";
import "./NavStyle.css";
import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();


function Nav(props) {

  const [selected, setSelected] = React.useState("home");


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

  React.useEffect(()=>{

      if(props.home)setSelected('home');
      if(props.about)setSelected('about');
      if(props.projects)setSelected('projects');
      if(props.contact)setSelected('contact');

  })




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
          className={selected === "home" ? "active" : ""}
          onClick={() => {
            setSelected("home");
            scrollHome();
          }}
        >
          Home
        </div>
        <div
          className={selected === "about" ? "active" : ""}
          onClick={() => {
            setSelected("about");
            scrollAbout();
          }}
        >
          About
        </div>
        <div
          className={selected === "projects" ? "active" : ""}
          onClick={() => {
            setSelected("projects");
            scrollProjects();
          }}
        >
          Projects
        </div>
        <div
          className={selected === "contact" ? "active" : ""}
          onClick={() => {
            setSelected("contact");
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
