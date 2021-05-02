import React, { Component } from 'react';
import axios from 'axios';
import { Button, Form, Card } from 'react-bootstrap';
import styles from '../../../../CSS/CodingCompForm.module.css';

class FullTimeForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobId: '',
      jobURL: '',
      title: '',
      company: '',
      image: '',
      jobDescription: '',
      location: '',
      eligibility: '',
      deadline: '',
    };

    this.data = {};
  }

  handleChange = (event) => {
    let itemValue = event.target.value;
    this.setState({
      [event.target.name]: itemValue,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('From handleSubmit', this.state.jobId);
    axios
      .post(
        'https://opportunity-calendar.herokuapp.com/opportunity',
        {
          opportunityId: this.state.jobId,
          opportunityURL: this.state.jobURL,
          opportunityTitle: this.state.title,
          opportunityOrganisation: this.state.company,
          organisationLogoURL: this.state.image,
          opportunityDescription: this.state.jobDescription,
          opportunityLocation: this.state.location,
          opportunityEligibility: this.state.eligibility,
          opportunityRegistrationDeadline: this.state.deadline,
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
      jobId: '',
      jobURL: '',
      title: '',
      company: '',
      image: '',
      jobDescription: '',
      location: '',
      eligibility: '',
      deadline: '',
    });
  };

  render() {
    const {
      jobId,
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
          <Card className={styles.Card}>
            <Card.Header as="h5">
              <Form.Label className={styles.CardTitle}>
                Post a Job Opportunity
              </Form.Label>
            </Card.Header>

            <Card.Body>
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

              <Form.Group>
                <Form.Control
                  className={styles.Input}
                  type="text"
                  name="image"
                  value={image}
                  placeholder="Company Logo URL"
                  onChange={this.handleChange}
                  style={{ marginTop: '30px' }}
                />
              </Form.Group>

              <Form.Group>
                <Form.Control
                  className={styles.Input}
                  type="text"
                  name="title"
                  value={title}
                  placeholder="Opportunity Title"
                  onChange={this.handleChange}
                  style={{ marginTop: '30px' }}
                />
              </Form.Group>

              <Form.Group>
                <Form.Control
                  className={styles.Input}
                  type="text"
                  name="jobId"
                  value={jobId}
                  placeholder="Job ID"
                  onChange={this.handleChange}
                  style={{ marginTop: '30px' }}
                />
              </Form.Group>

              <Form.Group>
                <Form.Control
                  as="textarea"
                  rows={4}
                  style={{ marginTop: '35px' }}
                  name="jobDescription"
                  value={jobDescription}
                  placeholder="Short Description"
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
                  name="jobURL"
                  value={jobURL}
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

export default FullTimeForm;
