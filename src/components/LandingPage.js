import React from "react";
import "./SharedStyle.css";
import "./LandingPageStyle.css";
import mapboxgl from "mapbox-gl";
import { useInView } from "react-intersection-observer";

function LandingPage(props) {

  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.15,
  });
  mapboxgl.accessToken =
    "pk.eyJ1IjoibHNkOTIiLCJhIjoiY2s4ZmppbTJ3MDR4dDNsb3o2bjFqd2QxbSJ9.yJtrEsVvvfFiPHA4ytn2Og";

  let map;

  React.useEffect(() => {
    if (inView){
      document.getElementById("aboutOpt").className = '';
      document.getElementById("homeOpt").className = 'active';
      document.getElementById("projectsOpt").className = '';
      document.getElementById("contactOpt").className = '';
    }else
      document.getElementById("homeOpt").className = ''
    })

  React.useEffect(() => {
    map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/lsd92/ck8fjr26q18tf1ilj62wp6zjv",
      center: [151.209900, -33.865143],
      zoom: 4,
      pitch: 45,
    });
  }, []);

  React.useEffect(() => {
    let bearing = 0;
    setInterval(() => {
      map.setBearing((bearing = bearing + 0.01));
    });
  }, []);

  return (
    <div id="home" className="screen" ref={ref}>
      <div className="screenCover">
        <div className="text">
            Hello, I'm <span className="highlight">Luke Daniels</span>.
            <br/>
            I'm a full-stack developer living in Australia.
          </div>
          <div className="button" onClick={()=>document.getElementById('about').scrollIntoView({ behavior: "smooth" })}>
            View my work <i id="arrow" className="fas fa-chevron-right"></i>
          </div>
      </div>
      <div id="map" className="mapContainer" />
    </div>
  );
}

export default LandingPage;
