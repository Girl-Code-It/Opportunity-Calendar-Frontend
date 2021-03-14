import React, { Component } from 'react';
import Navbar from '../Navbar';
import HackathonsForm from './HackathonsForm';

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
