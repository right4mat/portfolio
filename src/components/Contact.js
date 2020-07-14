import React from "react";
import "./SharedStyle.css";
import "./ContactStyle.css";
import { useInView } from "react-intersection-observer";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'

function Contact(props) {
  const [email, setEmail] = React.useState("");
  const [showMsg, setShowMsg] = React.useState(false);
  const [showSpinner, setShowSpinner] = React.useState(false);
  const [body, setBody] = React.useState("");
  const [name, setName] = React.useState("");
  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.35,
  });

  const ValidateEmail = (mail) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }

    return false;
  };

  const sendEmail = () => {
    setShowSpinner(true)

    fetch("https://lsdsoftware.io/php/sendEmail.php", {
      method: "POST", // or 'PUT'
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: name, email: email, body: body }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setShowMsg(true)
        setEmail("");
        setBody("");
        setName("");
        setShowSpinner(false)
        setTimeout(()=>{
          setShowMsg(false)
        },5000)
      })
      .catch((error) => {
        console.error("Error:", error);
        alert(error)
        setShowSpinner(false)
      });
  };

  const send = () => {
    if (!ValidateEmail(email)) return alert("sorry, invalid email.");
    if (!name) return alert("What yours name?");
    if (!body) return alert("sorry, body cant be empty.");
    sendEmail();
  };

  React.useEffect(() => {
    if (inView) {
      document.getElementById("aboutOpt").className = "";
      document.getElementById("homeOpt").className = " ";
      document.getElementById("projectsOpt").className = "";
      document.getElementById("contactOpt").className = "active";
      document.getElementById("contactHeading").className += " slide";
      document.getElementById("contactUnderline").className += " slide";
      document.querySelector(".email").className += " slide";
    } else {
      document.getElementById("contactOpt").className = "";
    }
  });
  return (
    <div id="contact" className="screen" ref={props.inView} ref={ref}>
      <p id="contactHeading" className="heading" style={{ color: "#FFF" }}>
        Contact
      </p>
      <div id="contactUnderline" className="underLine"></div>
      <div className="email">
        <input placeholder="Name" type="text" name="name" required="" onChange={(x)=>setName(x.target.value)} value={name}/>
        <input
          placeholder="Enter email"
          type="email"
          name="email"
          required=""
          value={email}
          onChange={(x)=>setEmail(x.target.value)}
        />
        <textarea
          placeholder="Your Message"
          type="text"
          name="message"
          value={body}
          onChange={(x)=>setBody(x.target.value)}
        ></textarea>
        <div id="success" className={showMsg ? "showMsg" : "" }>
          <div>Your message was sent successfully. Thanks!</div>
        </div>
        <div class="button" id="submit"  onClick={send} >{showSpinner ? <Loader type="ThreeDots" color="#00BFFF" height={10} width={40} /> : 'Submit'}</div>
      </div>
    </div>
  );
}

export default Contact;
