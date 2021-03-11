import React, { Component } from 'react';
import styles from '../../CSS/ScrollTop.module.css';

export default class ScrollTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    };
  }

  componentDidMount() {
    var scrollComponent = this;
    document.addEventListener('scroll', function (e) {
      scrollComponent.toggleVisibility();
    });
  }

  toggleVisibility() {
    if (window.pageYOffset > 50) {
      this.setState({
        isVisible: true,
      });
    } else {
      this.setState({
        isVisible: false,
      });
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  render() {
    return (
      <div className={styles.scrollTop}>
        {this.state.isVisible && (
          <div onClick={() => this.scrollToTop()}>
            <button className={styles.scrollTopButton}>
              <i className={styles.upArrow}></i>
            </button>
          </div>
        )}
      </div>
    );
  }
}
