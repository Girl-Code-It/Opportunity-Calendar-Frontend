import React from 'react';
import styles from '../../CSS/Navbar.module.css';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';

function Navbar1({ onSearch }) {
  const [postOpportunityPath, setPostOpportunityPath] = React.useState();

  // as the last chunk of ViewOpportunity and PostOpportunity is same, we can
  // simply extract it from the URL. passing a prop is not necessary
  React.useEffect(() => {
    const pathname = window.location.pathname;
    const lastChunk = pathname.split('/').pop();
    lastChunk && setPostOpportunityPath(`/postopportunity/${lastChunk}`);
  }, []);

  const handleChange = (value) => onSearch(value);

  return (
    <Navbar fixed="top" bg="light" expand="lg" className={styles.NavBar}>
      <Navbar.Brand className={styles.Logo}>
        <a href="/" className={styles.Brand} style={{ fontSize: '35px' }}>
          Girl
          <span style={{ color: '#008dc8' }}> Code </span>
          It
        </a>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <div className={styles.searchContainer}>
            <AiOutlineSearch />
            <input
              type="text"
              className={styles.searchBar}
              onChange={(e) => handleChange(e.currentTarget.value)}
              placeholder="Search"
            />
          </div>
          <Link className={styles.link} to={postOpportunityPath}>
            <Button className={styles.Button}>Post Opportunity</Button>
          </Link>
          <Link className={styles.link} to="/signup">
            <Button
              className={`${styles.Button} ${styles.outline}`}
              variant="outline-info"
            >
              Login
            </Button>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navbar1;
