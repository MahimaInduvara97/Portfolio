import React from 'react'
import './Navbar.css'
import { Link as Scrolling } from "react-scroll";
import { Link as NavLink } from 'react-router-dom'
const Navbar = () => {

        const showAlert = () => {
            const primaryNav = document.querySelector(".n-list");
            const navToggle = document.querySelector(".mobile-nav-toggle");
            navToggle.addEventListener('click',(e) =>{
                const visibility = primaryNav.getAttribute('data-visible');
                if(visibility === "false"){
                    primaryNav.setAttribute('data-visible', true);
                    navToggle.setAttribute('aria-expanded', true);
                }
                else if (visibility === "true"){
                    primaryNav.setAttribute('data-visible', false);
                    navToggle.setAttribute('aria-expanded', false);
                }
            })

        }

    return (
        <section className={'header'} id="header">
       <div className="n-wrapper">

           <div className="n-left">
               <NavLink to={'/home'} className="n-name">
                       Mahima
           </NavLink>
           </div>
           <div className="n-right">  <button area-controls={"primary-navigation"} onClick={showAlert} aria-expanded="false" className={'mobile-nav-toggle'}><span className={'sr-only '}></span></button>
               <div className="n-list" id="primary-navigation"  data-visible="false">
                   <ul style={{listStyleType:"none"}}>
                       <li>
                           <Scrolling activeClass="active" spy={true} to={'/'} smooth='true' >
                               Home
                           </Scrolling>

                       </li>
                       <li>
                           <Scrolling to="services" spy={true} smooth={true}>
                               Serivces
                           </Scrolling>
                       </li>
                       <li><Scrolling to="contact" spy={true} smooth={true}>Contact
                       </Scrolling>
                       </li>
                       <li><Scrolling to="portfolio" spy={true} smooth={true}>
                           Protfolio
                       </Scrolling>
                       </li>
                       <li>
                           <Scrolling to="testimonial" spy={true} smooth={true}>
                           Testimonial
                       </Scrolling>
                       </li>
                   </ul>
               </div>
               <Scrolling to="contact" spy={true} smooth={true}>
               <button className={"button-custom submit-button"}>Contact Us</button>
               </Scrolling>
           </div>
       </div>
        </section>
    )
}

export default Navbar