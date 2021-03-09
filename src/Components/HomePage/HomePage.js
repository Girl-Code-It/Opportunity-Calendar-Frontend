import React, { Component } from "react";
import Navbar from "./Sections/Navbar";
import Banner from "./Sections/Banner";
import KnowAbout from "./Sections/KnowAbout";

class HomePage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Banner />
        <KnowAbout />
      </div>
    );
  }
}

export default HomePage;
