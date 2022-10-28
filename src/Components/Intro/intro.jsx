import React from 'react';
import "./intro.css"
import Vector1 from "../../img/pd-w-blue-shape.png";
import Vector2 from "../../img/taxi-26.png";
import myimage from "../../img/my-png.png";
import glassesimoji from "../../img/logo192.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Html from "../../img/html_css.png"
import { motion } from "framer-motion";

const Intro = () => {
    const transition = { duration: 2, type: "spring" };
    return (
        <div className={'Intro'} id={'Intro'}>
            <div className="i-left">
                <div className="i-name">
                    <span>Hi! I am </span>
                    <span> Mahima Induvara</span>
                    <span> I am a Frontend Developer with high level of experience in web designing
                        and development,</span>
                    <span> Producing the Quality work</span>

                </div>

                <a href={'https://zeed.org.lk/'} target={'_blank'}><button className="button-custom i-button">Website</button></a>

                <div className="i-icons">
                    <a href={'https://github.com/MahimaInduvara97'} target={'_blank'}><img src={Github} alt=""/> </a>
                    <a href={'https://www.linkedin.com/in/induvara-amarasekara-14363a1a2'} target={'_blank'}><img src={LinkedIn} alt="" /></a>
                    <a href={'https://www.instagram.com/induvaa/'} target={'_blank'}><img src={Instagram} alt="" /></a>
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt={""} />
                <img src={Vector2} alt={""}/>
                <img className={'my-image'} src={myimage} alt={""}/>


                <motion.img
                    initial={{ left: "-36%" }}
                    whileInView={{ left: "-24%" }}
                    transition={transition}
                    src={glassesimoji}
                    alt=""
                />

                <motion.div
                    initial={{ top: "-4%", left: "74%" }}
                    whileInView={{ left: "60%" }}
                    transition={transition}
                    className="floating-div"
                >
                    <FloatinDiv img={crown} text1="Web" text2="Developer/Freelancer" />
                </motion.div>


                <motion.div
                    initial={{ left: "9rem", top: "18rem" }}
                    whileInView={{ left: "0rem" }}
                    transition={transition}
                    className="floating-div"
                >

                    <FloatinDiv img={thumbup} text1="20+" text2="Web Developments" />
                </motion.div>

                <motion.img
                    initial={{ left: "20%" , top: "20rem" }}
                    whileInView={{ left: "60%", top: "50%" }}
                    transition={transition}
                    src={Html}
                    alt=""
                />

                <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
                <div
                    className="blur"
                    style={{
                        background: "#C1F5FF",
                        top: "17rem",
                        width: "21rem",
                        height: "11rem",
                        left: "-9rem",
                    }}
                ></div>
            </div>
        </div>
    );
};

export default Intro;
