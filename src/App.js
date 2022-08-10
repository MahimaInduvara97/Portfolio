import React from "react";
import './App.css';
import Home from "./Components/Home/Home";
//import Intro from "./Components/Intro/intro"
//import Services from "./Components/Services/Services";
//import Portfolio from "./Components/Portfolio/Portfolio";
//import Testimonial from "./Components/Testimonials/Testimonial";
//import Contact from "./Components/Contact/Contact";
//import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter as Router , Routes ,Route } from 'react-router-dom';
import PortContent from "./Components/PortContent/PortContent";
function App() {
  return (
      <React.Fragment >
              <Router>
                  <Routes>
                      <Route path={'/'}element={<Home/>} exact={true}></Route>
                      <Route path={'/home'}element={<Home/>}></Route>
                      <Route path={'/portfolios'} element={<PortContent/>}></Route>
                  </Routes>
              </Router>

      </React.Fragment>
  );
}

export default App;
