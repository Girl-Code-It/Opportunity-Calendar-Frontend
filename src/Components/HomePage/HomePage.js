import React from 'react';
import Navbar from './Sections/Navbar';
import Banner from './Sections/Banner';
import KnowAbout from './Sections/KnowAbout';
import Faq from './Sections/FAQ_main';
import AboutUs from './Sections/AboutUs';
import ContactUs from './Sections/ContactUs';
import Newsletter from './Sections/Newsletter'

function HomePage() {
  return (
    <div>
      <Navbar />
      <Banner />
      <AboutUs />
      <KnowAbout />
      <Faq />
      <Newsletter/>
      <ContactUs />
    </div>
  );
}

export default HomePage;
