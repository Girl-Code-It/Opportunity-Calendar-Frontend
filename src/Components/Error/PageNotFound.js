import React from "react";
import NotFound from '../../Assets/NotFound.svg';
import {
  Jumbotron,
  Col,
  Image
} from 'react-bootstrap';
import Navbar from '../../Components/HomePage/Sections/Navbar';
import {
  Link
} from 'react-router-dom';
import styles from '../../CSS/PageNotFound.module.css';

const PageNotFound = () => {
  return ( <
    div >
    <
    div className = {
      styles.Navbar
    } > < Navbar / > < /div> <
    Jumbotron className = {
      styles.Jumbotron
    } >
    <
    div className = {
      styles.Container
    } >
    <
    Col className = {
      styles.ImgColumn
    } >
    <
    Image className = {
      styles.NotFoundImage
    }
    src = {
      NotFound
    }
    alt = "Page Not Found" / >
    <
    /Col> <
    p className = {
      styles.NotFoundMessage
    } >
    The page you are looking
    for doesn’ t exist!
    <
    /p> <
    p className = {
      styles.NotFoundMessage
    } >
    You may have mistyped the address or page maybe removed. <
    /p>

    <
    div className = {
      styles.NotFoundButtonDiv
    } >
    <
    Link className = {
      styles.NotFoundButtonLink
    }
    to = "/" > Take me home < /Link> < /
    div > <
    /div> < /
    Jumbotron > <
    /div>

  );
}

export default PageNotFound;
