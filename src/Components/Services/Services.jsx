import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/xd-i.png";
import Glasses from "../../img/html_css-i.png";
import Humble from "../../img/wordpress-i.png";
import Reactt from "../../img/react-i.png";
import { motion } from "framer-motion";
import MyCV from './MahimaAmarasekara.pdf';

const Services = () => {
  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span>I,m Good at</span>
        <span>Technologies</span>
        <span>
          I am Fresher graduate of Sri Lanka Institute of Information Technology
          <br />
           (SLIIT) specializing in Information technology.<br/>
          I have more than 2 years experience as a web developer.
        </span>
        <a href={MyCV} download>
          <button className="button-custom s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "18rem" }}
          whileInView={{ left: "19rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"UI/UX"}
            detail={"Figma, Photoshop, Adobe xd (Wireframes & Mockups)"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "1rem", top: "12rem" }}
          whileInView={{ left: "4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Html/CSS"}
            detail={"Html, Css, JavaScript, Boostrap & Plugin Development"}
          />
        </motion.div>
        {/* 3rd Card */}
        <motion.div
          initial={{ top: "18rem", left: "20rem" }}
          whileInView={{ left: "20rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"WordPress"}
            detail={
              "Develop Websites using Wordpress CMS(Custom & Theme based)"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        {/* 4rd Card */}
        <motion.div
            initial={{ top: "7rem", right: "-38rem" }}
            whileInView={{ left: "35.5rem" }}
            transition={transition}
        >
          <Card
              emoji={Reactt}
              heading={"React"}
              detail={
                "Good at React Frontend Design and Developments"
              }
              color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
