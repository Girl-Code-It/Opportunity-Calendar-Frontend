import React, { Component } from "react";
import Navbar from "../Navbar";
import TechConfForm from "./TechConfForm";

class TechConf extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div style={{marginTop:"120px" , marginLeft:"300px", marginRight:"300px"}}>
            <TechConfForm/>
        </div>
      </div>
    );
  }
}

export default TechConf;
