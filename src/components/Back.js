import React from 'react';
import './Back.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram,faFacebook,faLinkedin,faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt,faEnvelope } from '@fortawesome/free-solid-svg-icons';
const back = () => {
  return (
    <div className="come">
    
      <div className="main">
        <div className="left">
        <h2> Follow us on</h2>
        <div className="icons">
       <div className="insta"> <a href="https://www.instagram.com/advaynits" ><FontAwesomeIcon icon={faInstagram} size="2x" /></a></div>
       <div className="facebook"><a href="https://www.facebook.com/share/uxfAUzwHb3a4oBov/?mibextid=qi2Omg"><FontAwesomeIcon icon={faFacebook} size="2x"/></a></div>
  
        <div className="linkedin"><a href="https://www.linkedin.com/company/advaynits/"><FontAwesomeIcon icon={faLinkedin} size="2x"/></a></div>
<div className="youtube"><a href="https://youtube.com/@advaynits?si=Tls29CM8U13wnSf4"><FontAwesomeIcon icon={faYoutube} size="2x"/></a></div>

        </div>
        </div>
        <div className="middle">
        <h1>Contact us</h1>
        <div className="text">
          <p>Ayush Sharma -7004079789</p>
          <p>Keshav Kumar-7761882293</p>
          <p><FontAwesomeIcon icon={faEnvelope} size="1x"/>  advay@nits.ac.in</p>
        </div>
        </div>
        <div className="right">
          <h3><a href="https://maps.app.goo.gl/wzKofbK8mC3oU3zi9"
          ><FontAwesomeIcon icon={faMapMarkerAlt} size="1x"/></a>NIT Silchar</h3>
        </div>
      </div>
      <div className="reachus"><h5>Reach Us</h5></div>
    </div>

  )
}

export default back;
