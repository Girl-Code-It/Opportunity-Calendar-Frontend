import Navbar from '../Navbar';
import HackathonsForm from './HackathonsForm';
import React from 'react';
import AddDiv from '../AddDiv';
import styles from '../../../../CSS/PostForm.module.css';
function Hackathon() {
  return (
    <div>
      <Navbar flink="/viewopportunity/hackathon" />
      <AddDiv/>
      <div className={styles.FullTimeComponent}>
        <HackathonsForm />
      </div>
    </div>
  );
}

export default Hackathon;
