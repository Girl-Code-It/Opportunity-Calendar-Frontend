import React, { Component } from "react";
import Banner from "./Sections/Banner";
import KnowAbout from "./Sections/KnowAbout";

class HomePage extends Component {
  render() {
    return (
      <div>
        <Banner />
        <KnowAbout />
      </div>
    );
  }
}

export default HomePage;