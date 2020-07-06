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

const Project = (props) => {
  return (
    <div className="project">
      <img src={props.img} className="projectImg" />
      <div className="projectText">
        <p className="projectHeading">{props.heading}</p>
        <div>{props.text}</div>
        <div>{props.tech}</div>
      </div>
    </div>
  );
};

function Projects(props) {
  return (
    <div id="projects" className="screen" ref={props.inView}>
      <p className="heading">Projects</p>
      <div className="projectsContainer">
        <Project
          img={AbcTutors}
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
          heading={"ABC Nanny Services (Tutoring)"}
          tech={"React Native / MySQL / PHP"}
        />
        <Project
          img={Maps}
          text={
            <div>
              Map editor built for one of Australia's largest travel companies.
              <br></br>interesting parts:<br></br>
              <ul>
                <li>
                  Live maps for websites use custom tile server to drive down
                  cost
                </li>
                <li>Automatic path creation for cycle, driving and walking</li>
                <li>Elevation profile creation</li>
                <li>Day by day maps / elevations</li>
                <li>importing map features from other maps</li>
                <li>upload GPX files </li>
              </ul>
            </div>
          }
          heading={"World Expeditions Travel Group Map Editor"}
          tech={"VanillaJS / MySQL / PHP"}
        />
        <Project
          img={Waiver}
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
        <Project
          img={AlgoView}
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

        <Project
          img={Fsi}
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

        <Project
          img={Ifuture}
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

        <Project
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
