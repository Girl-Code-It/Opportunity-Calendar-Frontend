import React, { Component } from 'react';
import Navbar from './Sections/Navbar';
import Banner from './Sections/Banner';
import KnowAbout from './Sections/KnowAbout';
import Faq from './Sections/FAQ_main';

class HomePage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Banner />
        <KnowAbout />
	<Faq/>
      </div>
    );
  }
}

export default HomePage;
