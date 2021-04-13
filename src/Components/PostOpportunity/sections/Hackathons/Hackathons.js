import Navbar from '../Navbar';
import HackathonsForm from './HackathonsForm';
import React from 'react';
import styles from '../../../../CSS/HackathonForm.module.css';

function Hackathons() {
  return (
    <div>
      <Navbar />
      <div className={styles.HackathonsComponent}>
        <HackathonsForm />
      </div>
    </div>
  );
}

export default Hackathons;
