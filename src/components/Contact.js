import React from 'react';
import './SharedStyle.css';
import './ContactStyle.css';

function Contact(props) {
  return (
    <div id="contact" className="screen" ref={props.inView}>
      <p className="heading" style={{color:"#FFF"}}>Contact</p>
        <div className="email">
            <input placeholder="Name" type="text" name="name" required=""/>
            <input placeholder="Enter email" type="email" name="email" required=""/>
            <textarea placeholder="Your Message" type="text" name="message"></textarea>
            <div id="success">
              <div>
                Your message was sent successfully. Thanks!<span id="close" class="mdi mdi-close"></span>
              </div>
            </div>
            <input class="button" type="submit" id="submit" value="SUBMIT"/>
        </div>
    </div>
  );
}

export default Contact;
