import React from 'react';
import './SharedStyle.css';
import './ContactStyle.css';
import { useInView } from "react-intersection-observer";

function Contact(props) {
  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.35,
  });

  React.useEffect(() => {
    if (inView) {
      document.getElementById("contactHeading").className += " slide";
      document.getElementById("contactUnderline").className += " slide";
      document.querySelector(".email").className += " slide";
    }
  });
  return (
    <div id="contact" className="screen" ref={props.inView} ref={ref}>
      <p id="contactHeading" className="heading" style={{color:"#FFF"}}>Contact</p>
      <div id="contactUnderline" className="underLine"></div>
        <div className="email">
            <input placeholder="Name" type="text" name="name" required=""/>
            <input placeholder="Enter email" type="email" name="email" required=""/>
            <textarea placeholder="Your Message" type="text" name="message"></textarea>
            <div id="success">
              <div>
                Your message was sent successfully. Thanks!
              </div>
            </div>
            <input class="button" type="submit" id="submit" value="SUBMIT"/>
        </div>
    </div>
  );
}

export default Contact;
