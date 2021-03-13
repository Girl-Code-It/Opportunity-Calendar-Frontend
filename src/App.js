import React from 'react';
// import axios from 'axios'
import HomePage from './Components/HomePage/HomePage';
import PostOpportunity from './Components/PostOpportunity/PostOpportunity';
import FullTimeForm from './Components/PostOpportunity/sections/FullTime/FullTime';
import InternshipForm from './Components/PostOpportunity/sections/Internships/Internships';
import TechConfForm from './Components/PostOpportunity/sections/TechConf/TechConf';
import HackathonForm from './Components/PostOpportunity/sections/Hackathons/Hackathons';
import CodingCompForm from './Components/PostOpportunity/sections/CodingComp/CodingComp';
import ScholarshipForm from './Components/PostOpportunity/sections/Scholarships/Scholarships';
import ScrollTop from './Components/ScrollTop/ScrollTop';

import { ViewOpportunity } from './Components/ViewOpportunity/';

import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <div>
                <HomePage />
              </div>
            )}
          />
          <Route
            exact
            path="/viewopportunity"
            render={(props) => (
              <div>
                <ViewOpportunity />
              </div>
            )}
          />
          <Route
            exact
            path="/postopportunity"
            render={(props) => (
              <div>
                <PostOpportunity />
              </div>
            )}
          />
          <Route
            exact
            path="/viewopportunity/fulltime"
            render={(props) => (
              <div>
                <ViewOpportunity path="job" />
              </div>
            )}
          />
          <Route
            exact
            path="/viewopportunity/hackathon"
            render={(props) => (
              <div>
                <ViewOpportunity path="hackathon" />
              </div>
            )}
          />
          <Route
            exact
            path="/viewopportunity/scholarship"
            render={(props) => (
              <div>
                <ViewOpportunity path="scholarship" />
              </div>
            )}
          />
          <Route
            exact
            path="/viewopportunity/codingcomp"
            render={(props) => (
              <div>
                {/*<CodingComp />*/}
                <ViewOpportunity path="competition" />
              </div>
            )}
          />
          <Route
            exact
            path="/viewopportunity/techconf"
            render={(props) => (
              <div>
                {/*
                  <TechConf />
                */}
                <ViewOpportunity path="conference" />
              </div>
            )}
          />
          <Route
            exact
            path="/viewopportunity/internships"
            render={(props) => (
              <div>
                <ViewOpportunity path="intern" />
              </div>
            )}
          />
          <Route
            exact
            path="/postopportunity/FullTime"
            render={(props) => (
              <div>
                <FullTimeForm />
              </div>
            )}
          />
          <Route
            exact
            path="/postopportunity/CodingComp"
            render={(props) => (
              <div>
                <CodingCompForm />
              </div>
            )}
          />
          <Route
            exact
            path="/postopportunity/Hackathon" // just changed the path to make the hackathon table visible
            render={(props) => (
              <div>
                <HackathonForm />
              </div>
            )}
          />
          <Route
            exact
            path="/postopportunity/Internships"
            render={(props) => (
              <div>
                <InternshipForm />
              </div>
            )}
          />
          <Route
            exact
            path="/postopportunity/Scholarship" // changed the path from Scholarships to Scholarship to make the scholaeship table visible and also the navbar to visible 
            render={(props) => (
              <div>
                <ScholarshipForm />
              </div>
            )}
          />
          <Route
            exact
            path="/postopportunity/TechConf"
            render={(props) => (
              <div>
                <TechConfForm />
              </div>
            )}
          />
        </Switch>
        <ScrollTop />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
