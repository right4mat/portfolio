import React from "react";
import "./SharedStyle.css";
import "./AboutStyle.css";
import { useInView } from 'react-intersection-observer';


const Skill = (props) => {
  return (
    <div className="skill">
      <div className="icon">{props.icon}</div>
      <p>{props.text}</p>
    </div>
  );
};

function About(props) {


  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.35,
  })

  React.useEffect(()=>{
    if(inView){
      document.getElementById("skills").className += " slide";
      document.getElementById("aboutText").className += " slide";
    }
  })


  return (
    <div id = "about" className="screen" ref={props.inView} ref={ref}>
       <p className="heading">About</p>
      <div id="aboutText" className="">
        <p className="aboutText">Currently helping travel companies bring there ideas to life!</p>
        <p className="poweredText">
          Powered by VSCode, ReactJS, React Native, PHP, MySQL, VanillaJS,
          JQuery and... Coffee
        </p>
      </div>
      <div id="skills" className="skills">
          <Skill text={"Fast load times and lag free interaction, my highest priority."} icon={<i className="fas fa-rocket largeIcon"></i>} />
          <Skill text={"Strong preference for easy to use, intuitive UX/UI."}  icon={<i className="material-icons largeIcon">&#xe337;</i>} />
          <Skill text={"My layouts will work on any device, big or small."}  icon={<i className="fas fa-star largeIcon"></i>} />
          <Skill text={"My layouts will work on any device, big or small."}  icon={<i class="far fa-lightbulb largeIcon"></i>} />
       
      </div>
    </div>
  );
}

export default About;
