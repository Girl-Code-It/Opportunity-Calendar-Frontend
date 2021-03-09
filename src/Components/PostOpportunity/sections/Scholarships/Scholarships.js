import React, { Component } from 'react';
import Navbar from '../Navbar';
import ScholarshipForm from './ScholarshipForm';

class FullTime extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div
          style={{
            marginTop: '120px',
            marginLeft: '300px',
            marginRight: '300px',
          }}
        >
          <ScholarshipForm />
        </div>
      </div>
    );
  }
}

export default FullTime;
