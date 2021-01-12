import React from 'react';
// import axios from 'axios'
import HomePage from "./Components/HomePage/HomePage"
import ViewOpportunity from "./Components/ViewOpportunity/ViewOpportunity"
import FullTime from "./Components/ViewOpportunity/Sections/FullTime/FullTime"
import Hackathons from "./Components/ViewOpportunity/Sections/Hackathons/Hackathons"
import Scholarships from "./Components/ViewOpportunity/Sections/Scholarships/Scholarships"
import CodingComp from "./Components/ViewOpportunity/Sections/CodingComp/CodingComp"
import TechConf from "./Components/ViewOpportunity/Sections/TechConf/TechConf"
import Internships from "./Components/ViewOpportunity/Sections/Internships/Internships"

import Footer from "./Components/Footer/Footer"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className = "App">
        <Switch>
          <Route 
            exact
            path = "/"
            render = {(props) => (
              <div>
                <HomePage />
              </div>
            )}
          />
          <Route 
            exact
            path = "/viewopportunity"
            render = {(props) => (
              <div>
                <ViewOpportunity />
              </div>
            )}
          />
          <Route 
            exact
            path = "/viewopportunity/fulltime"
            render = {(props) => (
              <div>
                <FullTime />
              </div>
            )}
          />
          <Route 
            exact
            path = "/viewopportunity/hackathon"
            render = {(props) => (
              <div>
                <Hackathons />
              </div>
            )}
          />
          <Route 
            exact
            path = "/viewopportunity/scholarship"
            render = {(props) => (
              <div>
                <Scholarships />
              </div>
            )}
          />
          <Route 
            exact
            path = "/viewopportunity/codingcomp"
            render = {(props) => (
              <div>
                <CodingComp />
              </div>
            )}
          />
          <Route 
            exact
            path = "/viewopportunity/techconf"
            render = {(props) => (
              <div>
                <TechConf />
              </div>
            )}
          />
          <Route 
            exact
            path = "/viewopportunity/internships"
            render = {(props) => (
              <div>
                <Internships />
              </div>
            )}
          />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
