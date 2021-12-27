import React from 'react';
import axios from 'axios';
import { OpportunityCard } from './OpportunityCard';
import {
  Card,
  Col,
  Container,
  Jumbotron,
  Row,
  Image,
  Button,
  NavDropdown,
} from 'react-bootstrap';
import styles from '../../CSS/Opportunity.module.css';
import Navbar from './Navbar';

const URL = window.location.href;
const splitUrl = URL.split('/viewopportunity/')[1];
const mapUrlToName = {
  techconf: 'Tech Conferences',
  codingcomp: 'Coding Competitions',
  scholarship: 'Scholarships',
  hackathon: 'Hackathons',
  internships: 'Internship Opportunities',
  fulltime: 'Full Time Jobs',
};

export default function CommonComponents({ onSearchFinal }) {
  const handleSearchString = (value) => {
    onSearchFinal(value);
  };
  return (
    <>
      <Navbar onSearch={handleSearchString} />
      <Card className="text-center">
        <Card.Body className={styles.BannerText}>
          <Card.Text className={styles.cardText}>
            {mapUrlToName[splitUrl]}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
