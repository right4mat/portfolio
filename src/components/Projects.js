import React from "react";
import "./SharedStyle.css";
import "./ProjectsStyle.css";
import AbcTutors from "../assets/abctutors.png";
import growingTeams from "../assets/growingteams.png";
import Maps from "../assets/maps.png";
import Waiver from "../assets/waiver.png";
import AlgoView from "../assets/algoview3.png";
import Fsi from "../assets/fsi.png";
import Covid from "../assets/covid.png";
import Ifuture from "../assets/ifuture.png";
import Reports from "../assets/REPORTS.png";
import Event from "../assets/eventsafe.png";
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
  const [ref, inView, entry] = useInView({});

  const [zoom, setZoom] = React.useState(false);

  React.useEffect(() => {
    if (inView) {
      document.getElementById("aboutOpt").className = "";
      document.getElementById("homeOpt").className = " ";
      document.getElementById("projectsOpt").className = "active";
      document.getElementById("contactOpt").className = " ";
      document.getElementById("projectHeading").className += " slide";
      document.getElementById("projectUnderline").className += " slide";
      setZoom(true);
    } else {
      document.getElementById("projectsOpt").className = "";
    }
  });
  return (
    <div id="projects" className="screen" ref={props.inView} ref={ref}>
      <p id="projectHeading" className="heading">
        Projects
      </p>
      <div id="projectUnderline" className="underLine"></div>
      <div className="projectsContainer">
      <Project
          zoomIn={zoom}
          img={growingTeams}
          parts={
            <ul>
              <li>Company optimization and profitablity</li>
              <li>HCM interaction</li>
              <li>Time and attendence rules for ANY situation</li>
              
              <li>Manage leave and overtime requests</li>
              <li>Payslips</li>
              <li>Push to external payroll systems</li>
            </ul>
          }
          text={
            <div>
              Currently the technical lead for a time and attendence start up named Growing Teams. Its still early days but we already have DHL and TOLL onboard our solution!.  
              <br />
              <br />
            </div>
          }
          heading={"Growing Teams"}
          tech={"UI5 / SAP HANA / NodeJS"}
        />
        <Project
          zoomIn={zoom}
          img={Event}
          parts={
            <ul>
              <li>Build your own custom forms.</li>
              <li>Print to pdf QR code with instructions.</li>
              <li>Add your own custom logo to the QR code</li>
              <li>Patron phoneless? You can manage patrons manually too.</li>
              <li>
                Manage all your events, venues, jobsites etc from the one
                platform.
              </li>
              <li>
                Standard cafe style check-in or send your patrons personalised
                QR codes to use in conjunction with the TRACQR scanner.
              </li>
              <li>
                Set permissons ontop of personalised QR codes to control access.
              </li>
            </ul>
          }
          text={
            <div>
              Currently used by the{" "}
              <a href="https://www.worldsurfleague.com/">Word Surf league!</a>{" "}
              TRACQR is the link between your COVIDSAFE plan and all the
              operational onsite requirements that come with it.
              <br />
              <br />
              <a href="https://trac-qr.com">View here</a>
            </div>
          }
          heading={"TRACQR"}
          tech={"ReactJS / MySQL / PHP"}
        />
        <Project
          zoomIn={zoom}
          img={AbcTutors}
          parts={
            <ul>
              <li>
                Find tutors locally based on distance or remote from all over
                Australia!
              </li>
              <li>Add your card details and begin booking tutors.</li>
              <li>Save tutors to your favourites.</li>
              <li>Filter tutors by experience and subject.</li>
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
          tech={"React Native / MySQL / PHP / Stripe"}
        />

        <Project
          zoomIn={zoom}
          img={Maps}
          parts={
            <ul>
              <li>
                Live maps for websites use custom tile server to drive down
                cost.
              </li>
              <li>Automatic path creation for cycle, driving and walking.</li>
              <li>Elevation profile creation.</li>
              <li>Day by day maps / elevations.</li>
              <li>Importing map features.</li>
              <li>Upload your own GPX files. </li>
            </ul>
          }
          text={
            <div>
              Map editor built for one of Australia's largest travel companies{" "}
              <a href="https://worldexpeditions.com/">
                World Expeditions Travel Group
              </a>{" "}
              .
              <br />
              <br />
              <a href="https://sydney.wextg.com/spawnitmapDEMO/?code=GHT&countries=NPL&itinerary=09294B5A-33B9-417B-9F09-49BC21B260B4&day=39">
                View demo here
              </a>
            </div>
          }
          heading={"World Expeditions Travel Group Map Editor"}
          tech={"VanillaJS / MySQL / PHP / Mapbox / Googles elevation API"}
        />
        <Project
          zoomIn={zoom}
          img={Waiver}
          parts={
            <ul>
              <li>Easy to install on ipads to use in the field.</li>
              <li>Easy to prefill at home through the browser.</li>
              <li>
                Dedicated back end, with the option of updating rezdy bookings
                directly through the API.
              </li>
            </ul>
          }
          text={
            <div>
              Progressive web app waiver system built for{" "}
              <a href="https://bmac.com.au/">
                {" "}
                Blue Mountains Adventure Company{" "}
              </a>{" "}
              <br />
              <br />
              <a href="https://sydney.wextg.com/bmwDEMO/">View demo here</a>
            </div>
          }
          heading={"BMAC Waivers"}
          tech={"VanillaJS / JQuery / MySQL / PHP / Rezdy"}
        />
        <Project
          zoomIn={zoom}
          img={AlgoView}
          parts={
            <ul>
              <li>An array of sorting algorithims. (Pun intended)</li>
              <li>Has path finding algorithims too.</li>
            </ul>
          }
          text={
            <div>
              Personal project to consolidate my knowledge of data structures
              and algorithims. <br />
              <br />
              <a href="https://lsdsoftware.io/algoview/">View here</a>
            </div>
          }
          heading={"Algo View"}
          tech={"ReactJS"}
        />

        <Project
          zoomIn={zoom}
          img={Fsi}
          parts={
            <ul>
              <li>Upload and delete documents as admin.</li>
              <li>Update home page as admin.</li>
              <li>Signup with email address.</li>
            </ul>
          }
          text={
            <div>
              Portal created for the{" "}
              <a href="https://fireandsafety.com.au/">FSI</a>. A place where FSI
              can share documents and news with distributors.
            </div>
          }
          heading={"FSI Portal"}
          tech={"ReactJS / MySQL / PHP"}
        />

        <Project
          zoomIn={zoom}
          img={Ifuture}
          parts={
            <ul>
              <li>Install to home screen for easy access.</li>
              <li>Pick when you want the letter to arrive.</li>
              <li>Validate email address upon send and then wait!</li>
            </ul>
          }
          text={
            <div>
              Progressive web app for writing letters to your future self.
              <br />
              <br />
              <a href="https://lsdsoftware.io/ifuture/">View here</a>
            </div>
          }
          heading={"Ifuture"}
          tech={"ReactJS / MySQL / PHP"}
        />

        <Project
          zoomIn={zoom}
          img={Covid}
          parts={
            <ul>
              <li>Switch between confirmed, deaths and recovered.</li>
              <li>Easy to visualise progression via time slider.</li>
              <li>Updates daily.</li>
            </ul>
          }
          text={
            <div>
              Geographical representation of the data set found at:{" "}
              <a href="https://github.com/CSSEGISandData/COVID-19">
                https://github.com/CSSEGISandData/COVID-19
              </a>
              <br />
              <br />
              <a href="https://lsdsoftware.io/covid/">View here</a>
            </div>
          }
          heading={"Covid Map"}
          tech={"ReactJS / Mapbox / PHP"}
        />
        <Project
          zoomIn={zoom}
          img={Reports}
          parts={
            <ul>
              <li>Updates daily.</li>
              <li>Filter data on all dimensions via the click of a button.</li>
              <li>Graphs generated instantly.</li>
              <li>Toggle between different graph styles.</li>
            </ul>
          }
          text={
            <div>
              Reporting system built for{" "}
              <a href="https://worldexpeditions.com/">
                World Expeditions Travel Group
              </a>{" "}
              to replace traditional spread sheet reporting.
              <br />
            </div>
          }
          heading={"WETG Reports"}
          tech={"VanillaJS / JQuery / Plotly / PHP / MySQL"}
        />
      </div>
    </div>
  );
}

export default Projects;
