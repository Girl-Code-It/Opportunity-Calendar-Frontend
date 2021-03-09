import React, { Component } from 'react';
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';
import styles from '../../../../CSS/HackathonForm.module.css';

class HackathonsForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      url: '',
      date: '',
      description: '',
      location: '',
      eligibility: '',
      deadline: '',
      image: '',
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
      .post(
        'https://opportunitycalendar.herokuapp.com/opportunities/hackathon/create/',
        {
          title: this.state.title,
          url: this.state.url,
          date: this.state.date,
          description: this.state.description,
          location: this.state.location,
          eligibility: this.state.eligibility,
          deadline: this.state.deadline,
          image: this.state.image,
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
      title: '',
      url: '',
      date: '',
      description: '',
      location: '',
      eligibility: '',
      deadline: '',
      image: '',
    });
  };

  render() {
    const {
      title,
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
          <Form.Label className={styles.CardTitle}>Post a Hackathon</Form.Label>

          <div className={styles.RectangleBasicDetails}></div>

          <Form.Group>
            <Form.Control
              style={{ marginLeft: '40px' }}
              className={styles.Input}
              type="text"
              name="title"
              value={title}
              placeholder="Hackathon Name"
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              className={styles.Input}
              type="text"
              name="image"
              value={image}
              placeholder="Hackathon Logo URL"
              onChange={this.handleChange}
              style={{ marginLeft: '40px', marginTop: '30px' }}
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              as="textarea"
              rows={4}
              style={{ marginTop: '35px', marginLeft: '40px' }}
              name="description"
              value={description}
              placeholder="Short Description"
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              className={styles.Input}
              type="text"
              name="date"
              value={date}
              placeholder="Date of Event"
              style={{ marginTop: '30px', marginLeft: '40px' }}
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
              style={{ marginTop: '30px', marginLeft: '40px' }}
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
              style={{ marginLeft: '40px', marginTop: '30px' }}
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
              style={{ marginLeft: '40px', marginTop: '30px' }}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              className={styles.Input}
              type="text"
              name="url"
              value={url}
              placeholder="Website / Link to Register"
              style={{ marginLeft: '40px', marginTop: '30px' }}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Button className={styles.Button} type="submit">
              Submit
            </Button>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default HackathonsForm;
