import React, { Component } from 'react';
import axios from 'axios';
import { Button, Form, Card, Col,Row } from 'react-bootstrap';
import styles from '../../../../CSS/PostForm.module.css';

class InternshipForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobURL: '',
      type: '',
      title: '',
      company: '',
      image: '',
      jobDescription: '',
      location: '',
      eligibility: '',
      deadline: '',
      onlyForFemale: false
    };

    // this.data = {};
  }

  handleChange = (event) => {
    let itemValue = event.target.value;
    this.setState({
      [event.target.name]: itemValue,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('From handleSubmit', this.state);
    axios
      .post(
        'https://opportunity-calendar.herokuapp.com/opportunity',
        {
          opportunityTitle: this.state.title,
          opportunityURL: this.state.jobURL,
          opportunityType: this.state.type,
          opportunityOrganisation: this.state.company,
          organisationLogoURL: this.state.image,
          opportunityDescription: this.state.jobDescription,
          opportunityLocation: this.state.location,
          opportunityEligibility: this.state.eligibility,
          opportunityDate: this.state.deadline,
          onlyForFemale: this.state.onlyForFemale
        }
      )
      .then(
        (res) => {
          const data = res.data;
          console.log(data);
          this.setState({ data });
        },
        (error) => {
          console.log(error);
        }
      );
    this.setState({
      jobURL: '',
      title: '',
      type: '',
      company: '',
      image: '',
      jobDescription: '',
      location: '',
      eligibility: '',
      deadline: '',
      onlyForFemale: ''
    });
  };

  render() {
    const {
      type,
      jobURL,
      title,
      company,
      image,
      jobDescription,
      location,
      eligibility,
      deadline,
    } = this.state;

    return (
      <div style={{ marginBottom: '80px' }}>
        <Form onSubmit={this.handleSubmit}>
        <Row form>
            <Col xs={12} sm={8}>
              <Form.Label
                className={styles.form_header}
                style={{ marginBottom: '40px' }}
              >
                Post a Internship
              </Form.Label>
            </Col>
            <Col md={4} sm={4} style={{ padding: '0 30px' }}>
              <Form.Control
                as="select"
                size="lg"
                style={{ marginBottom: '40px' }}
                name="type"
                value={type}
                onChange={this.handleChange}
              >
                <option>Opportunity type</option>
                <option value="JOB" selected>
                  Job
                </option>
                <option value="INTERNSHIP">Internship</option>
                <option value="HACKATHON">Hackathon</option>
                <option value="SCHOLARSHIP">Scholarship</option>
                <option value="CONFERENCE">Conferencne</option>
                <option value="CODINGCOMPETITION">Coding Competition</option>
                <option value="OTHERS">Others</option>
              </Form.Control>
            </Col>
          </Row>
          <Row form>
            <Col xs={12} sm={4}>
              <Form.Group className={styles.form_group}>
                <Form.Label className={styles.label} for="companyname">
                  Company name
                </Form.Label>
                <Form.Control
                  className={styles.Input}
                  type="text"
                  name="company"
                  id="companyname"
                  style={{ marginTop: '5px' }}
                  value={company}
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Col>
            <Col xs={12} sm={4}>
              <Form.Group className={styles.form_group}>
                <Form.Label className={styles.label} for="logo">
                  Company logo URL
                </Form.Label>
                <Form.Control
                  className={styles.Input}
                  type="text"
                  name="image"
                  id="logo"
                  value={image}
                  onChange={this.handleChange}
                  style={{ marginTop: '5px' }}
                />
              </Form.Group>
            </Col>
            <Col xs={12} sm={4}>
              <Form.Group className={styles.form_group}>
                <Form.Label className={styles.label} for="title">
                  Opportunity Title
                </Form.Label>
                <Form.Control
                  className={styles.Input}
                  type="text"
                  name="title"
                  id="title"
                  value={title}
                  onChange={this.handleChange}
                  style={{ marginTop: '5px' }}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row form>
            <Col xs={12} sm={4}>
              <Form.Group className={styles.form_group}>
                <Form.Label className={styles.label} for="location">
                  Location
                </Form.Label>
                <Form.Control
                  className={styles.Input}
                  type="text"
                  name="location"
                  id="location"
                  value={location}
                  placeholder="Location"
                  style={{ marginTop: '5px' }}
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Col>
            <Col xs={12} sm={4}>
              <Form.Group className={styles.form_group}>
                <Form.Label className={styles.label} for="deadline">
                  Last date to apply (YYYY-MM-DD)
                </Form.Label>
                <Form.Control
                  className={styles.Input}
                  type="text"
                  id="deadline"
                  name="deadline"
                  value={deadline}
                  placeholder="Last Date to Apply"
                  style={{ marginTop: '5px' }}
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Col>
            <Col xs={12} sm={4}>
              <Form.Group className={styles.form_group}>
                <Form.Label
                  className={styles.label}
                  className={styles.label}
                  for="eligibility"
                >
                  Eligibility
                </Form.Label>
                <Form.Control
                  className={styles.Input}
                  type="text"
                  name="eligibility"
                  id="eligibility"
                  value={eligibility}
                  placeholder="Eligibility"
                  style={{ marginTop: '5px' }}
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row form>
            
            <Col xs={12} sm={4}>
              <Form.Group className={styles.form_group}>
                <Form.Label className={styles.label} for="joburl">
                  Website
                </Form.Label>
                <Form.Control
                  className={styles.Input}
                  type="text"
                  name="jobURL"
                  id="joburl"
                  value={jobURL}
                  placeholder="Website"
                  style={{ marginTop: '5px' }}
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Col>
            <Col xs={12} sm={4}>
              <Form.Group className={styles.form_group}>
                <Form.Label className={styles.label} for="description">
                  Description
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  id="description"
                  style={{ marginTop: '5px' }}
                  name="jobDescription"
                  value={jobDescription}
                  placeholder="Short Description"
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Col>
            <Col xs={12} sm={4}>
              <Form.Group className={styles.form_group}>
                <Form.Check
                  type="switch"
                  className={styles.switch}
                  id="custom-switch"
                  label="Female specific"
                  onChange={(event) =>
                    this.setState({ onlyForFemale: event.target.checked })
                  }
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Form.Group className={styles.form_group}>
              <Button className={styles.Button} type="submit">
                Post Opportunity
              </Button>
            </Form.Group>
          </Row>
        </Form>
      </div>
    );
  }
}

export default InternshipForm;
