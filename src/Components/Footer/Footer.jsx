import React from "react";
import "./Footer.css";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">

      <div className="f-content">

        <a href={'mailto:induvara.amarasekara@gmail.com'} target={'_blank'}><span>induvara.amarasekara@gmail.com</span> </a>
        <div className="f-icons">
          <a href={'https://www.instagram.com/mahima_97__/'} target={'_blank'}><Insta color="white" size={"3rem"} /></a>
          <a href={'https://www.facebook.com/mahima.amarasekara/'} target={'_blank'}><Facebook color="white" size={"3rem"} /></a>
          <a href={'https://github.com/MahimaInduvara97'} target={'_blank'}><Gitub color="white" size={"3rem"} /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
