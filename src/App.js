import React from 'react';
// import axios from 'axios'

import HomePage from "./Components/HomePage/HomePage"
import ViewOpportunity from "./Components/ViewOpportunity/ViewOpportunity"
import PostOpportunity from "./Components/PostOpportunity/PostOpportunity"
import FullTime from "./Components/ViewOpportunity/Sections/FullTime/FullTime"
import Hackathons from "./Components/ViewOpportunity/Sections/Hackathons/Hackathons"
import Scholarships from "./Components/ViewOpportunity/Sections/Scholarships/Scholarships"
import CodingComp from "./Components/ViewOpportunity/Sections/CodingComp/CodingComp"
import TechConf from "./Components/ViewOpportunity/Sections/TechConf/TechConf"
import Internships from "./Components/ViewOpportunity/Sections/Internships/Internships"
import FullTimeForm from "./Components/PostOpportunity/sections/FullTime/FullTime"
import InternshipForm from "./Components/PostOpportunity/sections/Internships/Internships"
import TechConfForm from "./Components/PostOpportunity/sections/TechConf/TechConf"
import HackathonForm from "./Components/PostOpportunity/sections/Hackathons/Hackathons"
import CodingCompForm from "./Components/PostOpportunity/sections/CodingComp/CodingComp"
import ScholarshipForm from "./Components/PostOpportunity/sections/Scholarships/Scholarships"
import Footer from "./Components/Footer/Footer"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import SignUp from './Components/Signup-Login/SignUp';
import Login from './Components/Signup-Login/Login';

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
            path="/signup"
            component={SignUp}
          />
          <Route
            exact
            path="/login"
            component={Login}
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
            path = "/postopportunity"
            render = {(props) => (
              <div>
                <PostOpportunity />
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
          <Route
          exact
          path = "/postopportunity/FullTime"
          render = {(props) => (
            <div>
              <FullTimeForm />
            </div>
          )}
          />
           <Route
          exact
          path = "/postopportunity/CodingComp"
          render = {(props) => (
            <div>
              <CodingCompForm />
            </div>
          )}
          />
          <Route
          exact
          path = "/postopportunity/Hackathons"
          render = {(props) => (
            <div>
              <HackathonForm />
            </div>
          )}
          />
          <Route
          exact
          path = "/postopportunity/Internships"
          render = {(props) => (
            <div>
              <InternshipForm />
            </div>
          )}
          />
          <Route
          exact
          path = "/postopportunity/Scholarships"
          render = {(props) => (
            <div>
              <ScholarshipForm />
            </div>
          )}
          />
          <Route
          exact
          path = "/postopportunity/TechConf"
          render = {(props) => (
            <div>
              <TechConfForm />
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
