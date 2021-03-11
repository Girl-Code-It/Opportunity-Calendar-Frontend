import React, { Component } from 'react';
import Navbar from './Sections/Navbar';
import Banner from './Sections/Banner';
import KnowAbout from './Sections/KnowAbout';
import Faq from './Sections/FAQ_main';
import AboutUs from "./Sections/AboutUs"; 
import ContactUs from "./Sections/ContactUs"; 

class HomePage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Banner />
        <AboutUs/>
	      <Faq/>
        <KnowAbout />
        <ContactUs />
      </div>
    );
  }
}

export default HomePage;
