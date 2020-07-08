import React from "react";
import "./SharedStyle.css";
import "./ProjectsStyle.css";
import AbcTutors from "../assets/abctutors.png";
import Maps from "../assets/maps.png";
import Waiver from "../assets/waiver.png";
import AlgoView from "../assets/algoview3.png";
import Fsi from "../assets/fsi.png";
import Covid from "../assets/covid.png";
import Ifuture from "../assets/ifuture.png";
import { useInView } from "react-intersection-observer";

const Project = (props) => {
  return (
    <div className={props.zoomIn ? "project zoomIn" : "project"}>
      <img src={props.img} className="projectImg" />
      <div className="projectText">
        <p className="projectHeading">{props.heading}</p>
        <div>{props.text}</div>
        <div>{props.parts}</div>
        <div className="stack">{props.tech}</div>
      </div>
    </div>
  );
};

function Projects(props) {

    const [ref, inView, entry] = useInView({
      /* Optional options */
      threshold: 0.15,
    });

    const[zoom, setZoom] = React.useState(false);
  
    React.useEffect(() => {
      if (inView) {
        document.getElementById("projectHeading").className += " slide";
        document.getElementById("projectUnderline").className += " slide";
        setZoom(true)

      }
    });
  return (
    <div id="projects" className="screen" ref={props.inView} ref={ref}>
      <p id="projectHeading" className="heading">Projects</p>
      <div id="projectUnderline" className="underLine"></div>
      <div className="projectsContainer">
        <Project
        zoomIn={zoom}
          img={AbcTutors}
          parts={
            <ul>
              <li>
                Find tutors locally based on distance, or remote from all over Australia!
              </li>
              <li>Add your card details and begin booking tutors!</li>
              <li>Save tutors to your favorites!</li>
              <li>Filter tutors by experince and subject!</li>
              <li>IOS and Android</li>
            </ul>
          }
          text={
            <div>
              Cross platform IOS and Android app developed for ABC Nanny
              Services as a fail safe for the company to transition out of
              childcare and into tutoring due to Covid 19.
            </div>
          }
          heading={"ABC Nanny Services (Tutoring)"}
          tech={"React Native / MySQL / PHP"}
        />
        <Project
         zoomIn={zoom}
          img={Maps}
          text={
            <div>
              Map editor built for one of Australia's largest travel companies.
              <ul>
                <li>
                  Live maps for websites use custom tile server to drive down
                  cost!
                </li>
                <li>Automatic path creation for cycle, driving and walking!</li>
                <li>Elevation profile creation!</li>
                <li>Day by day maps / elevations!</li>
                <li>importing map features from other maps!</li>
                <li>upload your own GPX files! </li>
              </ul>
            </div>
          }
          heading={"World Expeditions Travel Group Map Editor"}
          tech={"VanillaJS / MySQL / PHP / Mapbox / Googles elevation API"}
        />
        <Project
         zoomIn={zoom}
          img={Waiver}
          text={
            <div>
              Progressive web app waiver system built for Blue Mountains
              Adventure Company
              <ul>
                <li>Easy to install on ipads to use in the field!</li>
                <li>Easy to prefill at home through the browser!</li>
                <li>Dedicated back end, with the option of updating rezdy bookings directly through the API</li>
              </ul>
            </div>
          }
          heading={"BMAC Waivers"}
          tech={"VanillaJS / MySQL / PHP / Rezdy"}
        />
        <Project
         zoomIn={zoom}
          img={AlgoView}
          text={
            <div>
              Person project to consolidate my knowledge of data structures and algorithims
              <ul>
                <li>An array of sorting algorithims! (Pun intended)</li>
                <li>Has pathing finding algorithims too!</li>
              </ul>
            </div>
          }
          heading={"Algo View"}
          tech={"ReactJS"}
        />

        <Project
         zoomIn={zoom}
          img={Fsi}
          text={
            <div>
              Portal created for the <a href="https://fireandsafety.com.au/">FSI</a>. A place where FSI can share documents and news with distributors.
              <ul>
                <li>Upload and delete documents as admin!</li>
                <li>Update home page as admin!</li>
                <li>Signup with email address!</li>
              </ul>
            </div>
          }
          heading={"FSI Portal"}
          tech={"ReactJS / MySQL / PHP"}
        />

        <Project
         zoomIn={zoom}
          img={Ifuture}
          text={
            <div>
              Progressive web app for writing letters to your future self
              <ul>
                <li>Easy to install on in house ipads to use in the field</li>
                <li>Easy to prefill at home through the browser</li>
                <li>Updates rezdy bookings once filled</li>
                <li>
                  Can be intergrated with any booking system with that has api
                  access
                </li>
              </ul>
            </div>
          }
          heading={"Ifuture"}
          tech={"ReactJS / MySQL / PHP"}
        />

        <Project
         zoomIn={zoom}
          img={Covid}
          text={
            <div>
              Progressive web app waiver system built for Blue Mountains
              Adventure Company
              <br></br>interesting parts:<br></br>
              <ul>
                <li>Easy to install on in house ipads to use in the field</li>
                <li>Easy to prefill at home through the browser</li>
                <li>Updates rezdy bookings once filled</li>
                <li>
                  Can be intergrated with any booking system with that has api
                  access
                </li>
              </ul>
            </div>
          }
          heading={"BMAC Waivers"}
          tech={"VanillaJS / MySQL / PHP"}
        />
      </div>
    </div>
  );
}

export default Projects;
