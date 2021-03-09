import React, { Component } from "react";
import Navbar from "../Navbar";
import HackathonsForm from "./HackathonsForm";

class FullTime extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div
          style={{
            marginTop: "120px",
            marginLeft: "300px",
            marginRight: "300px",
          }}
        >
          <HackathonsForm />
        </div>
      </div>
    );
  }
}

export default FullTime;
