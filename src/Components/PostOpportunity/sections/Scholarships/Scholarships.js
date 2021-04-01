import React, { Component } from 'react';
import Navbar from '../Navbar';
import ScholarshipForm from './ScholarshipForm';
import PostOpportunity from '../../PostOpportunity';

function FullTime() {
  return (
    <div>
      <Navbar />
      <PostOpportunity />
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

export default FullTime;
