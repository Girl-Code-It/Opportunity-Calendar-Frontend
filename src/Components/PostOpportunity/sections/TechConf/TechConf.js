import React, { Component } from 'react';
import Navbar from '../Navbar';
import TechConfForm from './TechConfForm';
import styles from '../../../../CSS/FullTimeForm.module.css';

class TechConf extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className={styles.FullTimeComponent}>
          <TechConfForm />
        </div>
      </div>
    );
  }
}

export default TechConf;
