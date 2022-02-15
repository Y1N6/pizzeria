import React from "react";

import "./styles/Contact.css";

export default function Contact() {
  let changeImg = () => {
    document.getElementById("contactMapiframe").style.display = "block";
    document.getElementById("contactMapimg").style.display = "none";
    document.getElementById("contactMaptext").style.display = "none";
  };

  return (
    <div className="contact">
      <div className="contactNum">
        <div>Tell</div>
        <div>Tell</div>
        <div>Tell</div>
        <div>Tell</div>
      </div>

      <div className="contactMap">
        <div onClick={() => changeImg()}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.6016612299813!2d2.8240463158798375!3d50.429892896726734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dd30faf499b12b%3A0x908e224437b141a4!2s39%20Bd%20Emile%20Basly%2C%2062300%20Lens!5e0!3m2!1sfr!2sfr!4v1644859191694!5m2!1sfr!2sfr"
            width="600"
            title="map"
            height="550"
            loading="lazy"
            id="contactMapiframe"
          ></iframe>
          <img
            src="https://data.planet-puzzles.com/perre-anatolian.104/perre-anatolian-world-map-puzzle-2000-pieces.82702-1.fs.jpg"
            alt="imgmap"
            width="600"
            height="550"
            id="contactMapimg"
          ></img>
          <p id="contactMaptext">afficher la carte</p>
        </div>
      </div>
    </div>
  );
}
