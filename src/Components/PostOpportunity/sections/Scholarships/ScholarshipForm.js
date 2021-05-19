import React, { Component } from 'react';
import axios from 'axios';
import { Form, Button, Col, Card, Row } from 'react-bootstrap';
import styles from '../../../../CSS/PostForm.module.css';

class ScholarshipForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: '',
      title: '',
      url: '',
      description: '',
      eligibility: '',
      deadline: '',
      image: '',
      onlyForFemale: false,
    };
  }

  handleChange = (event) => {
    let itemValue = event.target.value;
    this.setState({
      [event.target.name]: itemValue,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('From handleSubmit', this.state.title);
    axios
      .post('https://opportunity-calendar.herokuapp.com/opportunity', {
        opportunityTitle: this.state.title,
        opportunityType: this.state.type,
        opportunityURL: this.state.url,
        organisationLogoURL: this.state.image,
        opportunityDescription: this.state.description,
        opportunityEligibility: this.state.eligibility,
        opportunityDate: this.state.deadline,
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
      title: '',
      type: '',
      url: '',
      description: '',
      eligibility: '',
      deadline: '',
      image: '',
      onlyForFemale: '',
    });
  };

  render() {
    const {
      type,
      title,
      url,
      description,
      eligibility,
      deadline,
      image,
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
                Post a Scholarship
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
                <Form.Label className={styles.label} for="title">
                  Scholarship Name
                </Form.Label>
                <Form.Control
                  className={styles.Input}
                  type="text"
                  name="title"
                  value={title}
                  onChange={this.handleChange}
                  style={{ marginTop: '5px' }}
                />
              </Form.Group>
            </Col>
            <Col xs={12} sm={4}>
              <Form.Group className={styles.form_group}>
                <Form.Label className={styles.label} for="logo">
                  Scholarship logo Url
                </Form.Label>
                <Form.Control
                  className={styles.Input}
                  type="text"
                  name="image"
                  value={image}
                  onChange={this.handleChange}
                  style={{ marginTop: '5px' }}
                />
              </Form.Group>
            </Col>
            <Col xs={12} sm={4}>
              <Form.Group className={styles.form_group}>
                <Form.Label className={styles.label}>
                  Last Date to Apply
                </Form.Label>
                <Form.Control
                  className={styles.Input}
                  type="text"
                  name="deadline"
                  value={deadline}
                  style={{ marginTop: '5px' }}
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row form>
            <Col xs={12} sm={4}>
              <Form.Group className={styles.form_group}>
                <Form.Label className={styles.label}>Eligibility</Form.Label>
                <Form.Control
                  className={styles.Input}
                  type="text"
                  name="eligibility"
                  value={eligibility}
                  style={{ marginTop: '5px' }}
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Col>
            <Col xs={12} sm={4}>
              <Form.Group className={styles.form_group}>
                <Form.Label className={styles.label}>
                  Website / Link to Register
                </Form.Label>
                <Form.Control
                  className={styles.Input}
                  type="text"
                  name="url"
                  value={url}
                  style={{ marginTop: '5px' }}
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
          <Row form>
            <Col xs={12} sm={4}>
              <Form.Group className={styles.form_group}>
                <Form.Label className={styles.label} for="description">
                  Description
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  name="description"
                  value={description}
                  onChange={this.handleChange}
                  style={{ marginTop: '5px' }}
                />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

export default ScholarshipForm;
