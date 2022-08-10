import React from 'react';
import Navbar from "../Navbar/Navbar";
import Intro from "../Intro/intro";
import Services from "../Services/Services";
import Portfolio from "../Portfolio/Portfolio";
import Testimonial from "../Testimonials/Testimonial";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

const Home = () => {
    return (
        <div className="App">
            <Navbar/>
            <Intro/>
            <Services/>
            <Portfolio/>
            <Testimonial/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;
