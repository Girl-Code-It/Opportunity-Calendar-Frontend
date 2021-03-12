import React, { Component } from 'react';
import Navbar from '../Navbar';
import CodingCompForm from './CodingCompForm';
import styles from '../../../../CSS/CodingCompForm.module.css';

class CodingComp extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className={styles.CodingCompComponent}>
          <CodingCompForm />
        </div>
      </div>
    );
  }
}

export default CodingComp;
