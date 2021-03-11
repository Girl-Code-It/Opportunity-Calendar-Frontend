import React, { Component } from 'react';
import Navbar from './Sections/Navbar';
import Banner from './Sections/Banner';
import KnowAbout from './Sections/KnowAbout';
import AboutUs from "./Sections/AboutUs";

class HomePage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Banner />
        <AboutUs/>
        <KnowAbout />
      </div>
    );
  }
}

export default HomePage;
