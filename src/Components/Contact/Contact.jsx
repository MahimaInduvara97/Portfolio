import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import Location from "@iconscout/react-unicons/icons/uil-location-point";
import Mobile from "@iconscout/react-unicons/icons/uil-mobile-android";
import EmailI from "@iconscout/react-unicons/icons/uil-mailbox";
import Web from "@iconscout/react-unicons/icons/uil-sitemap";


const Contact = () => {

  const form = useRef();
  const [done, setDone] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "#",
        "###",
        form.current,
        "#"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          form.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          <span>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
        <section className={"details-co"}>
            <div className={'mydetails'}>
                <h3> <Location color="white" size={"1.2rem"} /> <span className={'dtls'}>Pelenwatte, pannipitiya</span></h3>
                <h3> <Mobile color="white" size={"1.2rem"} /> <span className={'dtls'}>0774166098</span></h3>
                <h3> <EmailI color="white" size={"1.2rem"} /> <span className={'dtls'}>induvara@gmail.com</span></h3>
                <h3>   <Web color="white" size={"1.2rem"} /> <span className={'dtls'}>zeed.org.lk</span></h3>
            </div>
        </section>
      <div className="c-right">

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className="user"  placeholder="Name"/>
          <input type="email" name="user_email" className="user" placeholder="Email"/>
          <textarea name="message" className="user" placeholder="Message"/>
          <input type="submit" value="    Send    " className="button-custom"/>
          <span>{done && "Thanks for Contact me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>

    </div>
  );
};

export default Contact;
