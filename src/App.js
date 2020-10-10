import React, { Component } from 'react';
import Navbar from "./Components/Navbar/Navbar"
import HomePage from "./Components/HomePage/HomePage"
import Footer from "./Components/Footer/Footer"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

class App extends Component {
  render() {
    return (
      <Router>
        <div className = "App">
          <Navbar />
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
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
