import Navbar from '../Navbar';
import HackathonsForm from './HackathonsForm';
import React from 'react';
import PostOpportunity from '../../PostOpportunity';

function FullTime() {
  return (
    <div>
      <Navbar />
      <PostOpportunity />
      <div>
        <HackathonsForm />
      </div>
    </div>
  );
}

export default FullTime;
