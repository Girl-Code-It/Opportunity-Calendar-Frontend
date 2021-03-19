import Navbar from '../Navbar';
import HackathonsForm from './HackathonsForm';
import React, { Component }  from 'react';


function FullTime() {
  return (
    <div>
      <Navbar />
      <div>
        <HackathonsForm />
      </div>
    </div>
  );
}

export default FullTime;
