import React from "react";
import "./SharedStyle.css";
import "./AboutStyle.css";
import { useInView } from "react-intersection-observer";

import Me from '../assets/me.jpg';

const Skill = (props) => {
  return (
    <div className="skill">
      <div className="icon">{props.icon}</div>
      <p>{props.text}</p>
    </div>
  );
};

function About(props) {
  const [about, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.15,
  });

  React.useEffect(() => {
    
    if (inView) {
      document.getElementById("aboutOpt").className = 'active';
      document.getElementById("homeOpt").className = ' ';
      document.getElementById("projectsOpt").className = ' ';
      document.getElementById("contactOpt").className = ' ';
      document.getElementById("skills").className += " slide";
      document.querySelector(".about").className += " slide";
      document.getElementById("aboutHeading").className += " slide";
      document.getElementById("aboutUnderline").className += " slide";
    }else{
      document.getElementById("aboutOpt").className = ''
    }
  });

  return (
    <div id="about" className="screen" ref={props.inView} ref={about}>
      <p id="aboutHeading" className="heading">About</p>
      <div id="aboutUnderline" className="underLine"></div>
      <div id="skills" className="skills">
        <Skill
          text={
            "Fast load times and lag free!"
          }
          icon={<i className="fas fa-rocket largeIcon"></i>}
        />
        <Skill
          text={"Devices, big or small."}
          icon={<i className="material-icons largeIcon">&#xe337;</i>}
        />
        <Skill
          text={"Easy to use, intuitive UX/UI."}
          icon={<i className="fas fa-star largeIcon"></i>}
        />
        <Skill
          text={"Thinking outside the box."}
          icon={<i class="far fa-lightbulb largeIcon"></i>}
        />
      </div>

      <div className="about">
        <div className="profilePic">
          <img src={Me}/>
        </div>
        <div id="aboutText" className="">
          <p className="aboutText">
            Currently helping companies bring their ideas to life!
          </p>
          <p id="buildSomething" onClick={()=>document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}>
            Want to build something together?
          </p>
          <p className="poweredText">
            Powered by VSCode, ReactJS, React Native, PHP, MySQL, VanillaJS,
            JQuery, AWS and... Coffee
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
