import React, { Component } from 'react';
import axios from 'axios';
import { Form, Button, Card, Col } from 'react-bootstrap';
import styles from '../../CSS/CodingCompForm.module.css';
import { Link } from 'react-router-dom';

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
      date: '',
      description: '',
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
        opportunityURL: this.state.url,
        opportunityOrganisation: this.state.company,
        opportunityDate: this.state.date,
        opportunityDescription: this.state.description,
        opportunityLocation: this.state.location,
        opportunityEligibility: this.state.eligibility,
        opportunityRegistrationDeadline: this.state.deadline,
        organisationLogoURL: this.state.image,
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
      url,
      date,
      description,
      location,
      eligibility,
      deadline,
      image,
    } = this.state;
    return (
      <div style={{ marginBottom: '80px' }}>
        <Form onSubmit={this.handleSubmit}>
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
                <Form.Control
                  className={styles.Input}
                  type="text"
                  name="image"
                  value={image}
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
                <Form.Control
                  className={styles.Input}
                  type="text"
                  name="location"
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
                <Form.Control
                  className={styles.Input}
                  type="text"
                  name="eligibility"
                  value={eligibility}
                  placeholder="Eligibility"
                  style={{ marginTop: '30px' }}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  className={styles.Input}
                  type="text"
                  name="url"
                  value={url}
                  placeholder="Website"
                  style={{ marginTop: '30px' }}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Button className={styles.Button} type="submit">
                  Submit
                </Button>
              </Form.Group>
            </Card.Body>
          </Card>
        </Form>
      </div>
    );
  }
}

export default OpportunityForm;
