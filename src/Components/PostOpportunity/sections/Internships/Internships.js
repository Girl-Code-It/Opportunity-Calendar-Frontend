import React, { Component } from 'react';
import Navbar from '../Navbar';
import InternshipForm from './InternshipForm';
import styles from '../../../../CSS/FullTimeForm.module.css';

class FullTime extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className={styles.FullTimeComponent}>
          <InternshipForm />
        </div>
      </div>
    );
  }
}

export default FullTime;
