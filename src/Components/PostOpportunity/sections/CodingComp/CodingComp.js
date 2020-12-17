import React, { Component } from "react";
import Navbar from "../Navbar";
import CodingCompForm from "./CodingCompForm";

class CodingComp extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div style={{marginTop:"120px" , marginLeft:"300px", marginRight:"300px"}}>
            <CodingCompForm/>
        </div>
      </div>
    );
  }
}

export default CodingComp;
