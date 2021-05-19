import React, { Component } from 'react';
import axios from 'axios';
<<<<<<< HEAD:src/Components/PostOpportunity/PostOpportunityForm.js
import { Form, Button, Card, Col } from 'react-bootstrap';
import styles from '../../CSS/CodingCompForm.module.css';
import { Link } from 'react-router-dom';

=======
import { Button, Form, Row, Card, Col } from 'react-bootstrap';
import styles from '../../../../CSS/PostForm.module.css';
>>>>>>> feat_post_opp:src/Components/PostOpportunity/sections/FullTime/FullTimeForm.js
//regex for url validation
var pattern = new RegExp(
  '^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$',
  'i'
);
const mapUrlToName = {
  techconf: 'Tech Conference',
  codingcomp: 'Coding Competition',
  scholarship: 'Scholarship',
  hackathon: 'Hackathon',
  internships: 'Internship Opportunity',
  fulltime: 'Full Time Job',
};
let path;
let viewOpportunityPath;
class OpportunityForm extends Component {
  constructor(props) {
    super(props);
    path = props.path;

    this.state = {
      type: '',
      title: '',
      url: '',
      company: '',
<<<<<<< HEAD:src/Components/PostOpportunity/PostOpportunityForm.js
      date: '',
      description: '',
=======
      image: '',
      jobid: '',
      jobDescription: '',
>>>>>>> feat_post_opp:src/Components/PostOpportunity/sections/FullTime/FullTimeForm.js
      location: '',
      eligibility: '',
      deadline: '',
      image: '',
      onlyForFemale: false,
      FieldEmptyError: '',
      URLError: '',
    };
  }

  handleChange = (event) => {
    let itemValue = event.target.value;
    this.setState({
      [event.target.name]: itemValue,
    });
  };

  validate = () => {
    let FieldEmptyError = '';
    let URLError = '';
    if (
      !this.state.type ||
      !this.state.title ||
      !this.state.description ||
      !this.state.eligibility ||
      !this.state.location
    ) {
      FieldEmptyError = 'cannot be blank';
    }
    if (!pattern.test(this.state.jobURL) || !pattern.test(this.state.image)) {
      URLError = 'Invalid URL';
    }
    if (FieldEmptyError || URLError) {
      this.setState({ FieldEmptyError, URLError });
      return false;
    }
    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('https://opportunity-calendar.herokuapp.com/opportunity', {
        opportunityTitle: this.state.title,
        opportunityType: this.state.type,
<<<<<<< HEAD:src/Components/PostOpportunity/PostOpportunityForm.js
        opportunityURL: this.state.url,
        opportunityOrganisation: this.state.company,
        opportunityDate: this.state.date,
        opportunityDescription: this.state.description,
        opportunityLocation: this.state.location,
        opportunityEligibility: this.state.eligibility,
        opportunityRegistrationDeadline: this.state.deadline,
        organisationLogoURL: this.state.image,
=======
        opportunityURL: this.state.jobURL,
        opportunityOrganisation: this.state.company,
        organisationLogoURL: this.state.image,
        opportunityDescription: this.state.jobDescription,
        opportunityLocation: this.state.location,
        opportunityEligibility: this.state.eligibility,
        opportunityDate: this.state.deadline,
>>>>>>> feat_post_opp:src/Components/PostOpportunity/sections/FullTime/FullTimeForm.js
        onlyForFemale: this.state.onlyForFemale,
      })
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
      type: '',
      title: '',
      url: '',
      date: '',
      company: '',
      description: '',
      location: '',
      eligibility: '',
      jobid: '',
      deadline: '',
      image: '',
      onlyForFemale: '',
    });
    setTimeout(() => {
      window.location.href = `/viewopportunity/${path}`;
    }, 1000);
  };

  render() {
    const {
      type,
      title,
      company,
<<<<<<< HEAD:src/Components/PostOpportunity/PostOpportunityForm.js
      url,
      date,
      description,
=======
      jobid,
      image,
      jobDescription,
>>>>>>> feat_post_opp:src/Components/PostOpportunity/sections/FullTime/FullTimeForm.js
      location,
      eligibility,
      deadline,
      image,
    } = this.state;
    return (
      <div style={{ marginBottom: '80px' }}>
        <Form onSubmit={this.handleSubmit}>
<<<<<<< HEAD:src/Components/PostOpportunity/PostOpportunityForm.js
          <Card className={styles.Card}>
            <Card.Header as="h5">
              {' '}
              <Form.Label className={styles.CardTitle}>
                Post a {mapUrlToName[path]}
              </Form.Label>
            </Card.Header>

            <Card.Body>
              {(path == 'internships' || path == 'fulltime') && (
                <Form.Group>
                  <Form.Control
                    className={styles.Input}
                    type="text"
                    name="company"
                    value={company}
                    placeholder="Company Name"
                    onChange={this.handleChange}
                  />
                </Form.Group>
              )}
              <Form.Group>
                <Form.Control
                  className={styles.Input}
                  type="text"
                  name="title"
                  value={title}
                  placeholder={mapUrlToName[path] + ' Name'}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group>
=======
          <Row form>
            <Col xs={12} sm={8}>
              <Form.Label
                className={styles.form_header}
                style={{ marginBottom: '40px' }}
              >
                Post a Job Opportunity
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
>>>>>>> feat_post_opp:src/Components/PostOpportunity/sections/FullTime/FullTimeForm.js
                <Form.Control
                  className={styles.Input}
                  type="text"
                  name="image"
                  id="logo"
                  value={image}
<<<<<<< HEAD:src/Components/PostOpportunity/PostOpportunityForm.js
                  placeholder="Logo URL"
                  style={{ marginTop: '30px' }}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridType">
                  <Form.Control
                    as="select"
                    size="lg"
                    name="type"
                    value={type}
                    onChange={this.handleChange}
                    style={{ marginTop: '30px' }}
                  >
                    <option defaultValue hidden>
                      Opportunity type
                    </option>
                    <option value="JOB">Job</option>
                    <option value="INTERNSHIP">Internship</option>
                    <option value="HACKATHON">Hackathon</option>
                    <option value="SCHOLARSHIP">Scholarship</option>
                    <option value="CONFERENCE">Conferencne</option>
                    <option value="CODINGCOMPETITION">
                      Coding Competition
                    </option>
                  </Form.Control>
                </Form.Group>

                <div style={{ fontSize: 12, color: 'red', marginLeft: '40px' }}>
                  {this.state.FieldEmptyError}
                </div>

                <Form.Group as={Col} controlId="formBasicType">
                  <Form.Check
                    type="checkbox"
                    size="md"
                    label="Only for female"
                    style={{ marginTop: '40px' }}
                    onChange={(event) =>
                      this.setState({ onlyForFemale: event.target.checked })
                    }
                  />
                </Form.Group>
              </Form.Row>
              <Form.Group>
                <Form.Control
                  as="textarea"
                  rows={4}
                  style={{ marginTop: '30px' }}
                  name="description"
                  value={description}
                  placeholder="Short Description"
                  onChange={this.handleChange}
                />
              </Form.Group>
              {(path == 'techconf' ||
                path == 'codingcomp' ||
                path == 'hackathon') && (
                <Form.Group>
                  <Form.Control
                    className={styles.Input}
                    type="text"
                    name="date"
                    value={date}
                    placeholder="Event date"
                    style={{ marginTop: '30px' }}
                    onChange={this.handleChange}
                  />
                </Form.Group>
              )}
              <Form.Group>
=======
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
                <Form.Label className={styles.label} for="jobid">
                  Job Id
                </Form.Label>
                <Form.Control
                  className={styles.Input}
                  type="text"
                  name="jobid"
                  id="jobid"
                  value={jobid}
                  style={{ marginTop: '5px' }}
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Col>
            <Col xs={12} sm={4}>
              <Form.Group className={styles.form_group}>
                <Form.Label className={styles.label} for="location">
                  Location
                </Form.Label>
>>>>>>> feat_post_opp:src/Components/PostOpportunity/sections/FullTime/FullTimeForm.js
                <Form.Control
                  className={styles.Input}
                  type="text"
                  name="location"
<<<<<<< HEAD:src/Components/PostOpportunity/PostOpportunityForm.js
                  value={location}
                  placeholder="Location"
                  style={{ marginTop: '30px' }}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  className={styles.Input}
                  type="text"
                  name="deadline"
                  value={deadline}
                  placeholder="Last Date to Apply"
                  style={{ marginTop: '30px' }}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group>
=======
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
          </Row>
          <Row form>
            <Col xs={12} sm={4}>
              <Form.Group className={styles.form_group}>
                <Form.Label
                  className={styles.label}
                  className={styles.label}
                  for="eligibility"
                >
                  Eligibility
                </Form.Label>
>>>>>>> feat_post_opp:src/Components/PostOpportunity/sections/FullTime/FullTimeForm.js
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
<<<<<<< HEAD:src/Components/PostOpportunity/PostOpportunityForm.js
              <Form.Group>
                <Form.Control
                  className={styles.Input}
                  type="text"
                  name="url"
                  value={url}
=======
            </Col>
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
>>>>>>> feat_post_opp:src/Components/PostOpportunity/sections/FullTime/FullTimeForm.js
                  placeholder="Website"
                  style={{ marginTop: '5px' }}
                  onChange={this.handleChange}
                />
              </Form.Group>
<<<<<<< HEAD:src/Components/PostOpportunity/PostOpportunityForm.js
              <Form.Group>
                <Button className={styles.Button} type="submit">
                  Submit
                </Button>
=======
            </Col>
          </Row>
          <Row form>
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
>>>>>>> feat_post_opp:src/Components/PostOpportunity/sections/FullTime/FullTimeForm.js
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

export default OpportunityForm;
