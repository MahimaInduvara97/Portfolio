import React, {Component} from 'react';
import './PortContent.css'
import Upwork from "../../img/wordpress-i.png";
import Fiverr from "../../img/react-i.png";
import Shopify from "../../img/html_css-i.png";
import Facebook from "../../img/javasc.png";
import { motion } from "framer-motion";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import {useLocation} from 'react-router-dom';

function PortContent (){
    const location = useLocation();
    let links=location.state.source;
    let logo =location.state.projectlogo;
        return (
            <React.Fragment>
                <section className={'App'}>
                    <Navbar/>
                    <div className="works" id="works">
                        {/* left side */}
                        <div className="w-left">
                            <div className="awesome">
                                {/* dark Mode */}
                                <span>Design and Develop</span>
                                <span>PLC.LK</span>
                                <div className="port-details">
                                    <h3>Company :<span> {location.state.name}</span></h3>
                                    <h3>Developed :<span>{location.state.develop} </span></h3>
                                    <h3>Technologies :<span> {location.state.techno}</span></h3>
                                    <h3>Source :<span>{links}</span></h3>
                                </div>

                            <a herf={links} target={'_blank'}><button className="button-custom s-button">View Project</button></a>

                                <div
                                    className="blur s-blur1"
                                    style={{background: "#ABF1FF94"}}
                                ></div>
                            </div>

                            {/* right side */}
                        </div>
                        <div className="w-right">
                            <motion.div
                                initial={{rotate: 45}}
                                whileInView={{rotate: 0}}
                                viewport={{margin: "-40px"}}
                                transition={{duration: 3.5, type: "spring"}}
                                className="w-mainCircle"
                            >
                                <div className="w-secCircle">
                                    <img src={Upwork} alt=""/>
                                </div>
                                <div className="w-secCircle">
                                    <img src={Fiverr} alt=""/>
                                </div>
                                <div className="w-secCircle">
                                    <img src={logo} alt="Logo"/>
                                </div>
                                <div className="w-secCircle">
                                    <img src={Shopify} alt=""/>
                                </div>
                                <div className="w-secCircle">
                                    <img src={Facebook} alt=""/>
                                </div>
                            </motion.div>
                            {/* background Circles */}
                            <div className="w-backCircle blueCircle"></div>
                            <div className="w-backCircle yellowCircle"></div>
                        </div>
                    </div>
                    <Footer/>
                </section>
            </React.Fragment>

        );
    }


export default PortContent;