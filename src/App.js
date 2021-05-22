import React from 'react';
import './App.css';
// import axios from 'axios'
import HomePage from './Components/HomePage/HomePage';
import SocialIcons from './Components/SocialIcons/SocialIcons';
import PostOpportunity from './Components/PostOpportunity/PostOpportunity';
import ScrollTop from './Components/ScrollTop/ScrollTop';
import { ViewOpportunity } from './Components/ViewOpportunity/';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from './Components/SignupLogin/SignUp';
import Login from './Components/SignupLogin/Login';
import PageNotFound from './Components/Error/PageNotFound';
import Forget from './Components/Forget/Forget';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <div style={{ marginLeft: '54px' }}>
                <SocialIcons />
                <HomePage />
              </div>
            )}
          />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/forget" component={Forget} />

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
                <ViewOpportunity path="JOB" />
              </div>
            )}
          />
          <Route
            exact
            path="/viewopportunity/hackathon"
            render={(props) => (
              <div>
                <ViewOpportunity path="HACKATHON" />
              </div>
            )}
          />
          <Route
            exact
            path="/viewopportunity/scholarship"
            render={(props) => (
              <div>
                <ViewOpportunity path="SCHOLARSHIP" />
              </div>
            )}
          />
          <Route
            exact
            path="/viewopportunity/codingcomp"
            render={(props) => (
              <div>
                {/*<CodingComp />*/}
                <ViewOpportunity path="CODINGCOMPETITION" />
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
                <ViewOpportunity path="CONFERENCE" />
              </div>
            )}
          />
          <Route
            exact
            path="/viewopportunity/internships"
            render={(props) => (
              <div>
                <ViewOpportunity path="INTERNSHIP" />
              </div>
            )}
          />
          <Route
            exact
            path="/postopportunity/FullTime"
            render={(props) => (
              <div>
                <PostOpportunity path="fulltime" />
              </div>
            )}
          />
          <Route
            exact
            path="/postopportunity/CodingComp"
            render={(props) => (
              <div>
                <PostOpportunity path="codingcomp" />
              </div>
            )}
          />
          <Route
            exact
            path="/postopportunity/Hackathon"
            render={(props) => (
              <div>
                <PostOpportunity path="hackathon" />
              </div>
            )}
          />
          <Route
            exact
            path="/postopportunity/Internships"
            render={(props) => (
              <div>
                <PostOpportunity path="internships" />
              </div>
            )}
          />
          <Route
            exact
            path="/postopportunity/Scholarship"
            render={(props) => (
              <div>
                <PostOpportunity path="scholarship" />
              </div>
            )}
          />
          <Route
            exact
            path="/postopportunity/TechConf"
            render={(props) => (
              <div>
                <PostOpportunity path="techconf" />
              </div>
            )}
          />
          <Route
            render={(props) => (
              <div>
                <PageNotFound />
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
