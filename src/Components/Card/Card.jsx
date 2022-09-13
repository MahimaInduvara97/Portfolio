import React from "react";
import "./Card.css";

const Card = ({emoji, heading, detail, color}) => {
  return (
    <div className="card" style={{borderColor: {color}}}> 
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
        <a href={"https://www.linkedin.com/in/induvara-amarasekara-14363a1a2/"} target={'_blank'}><button className="c-button">Eligibility</button></a>
    </div>
  );
};

export default Card;
