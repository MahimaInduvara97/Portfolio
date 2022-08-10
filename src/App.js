import React from "react";
import './App.css';
import Home from "./Components/Home/Home";
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
