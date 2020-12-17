import React, { Component } from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import styles from "../../../../CSS/FullTimeForm.module.css";

class FullTimeForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobId: "",
      jobURL: "",
      title: "",
      company: "",
      image: "",
      jobDescription: "",
      location: "",
      eligibility: "",
      deadline: "",
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
    console.log("From handleSubmit", this.state.jobId);
    axios
      .post("https://opportunitycalendar.herokuapp.com/opportunities/job/create/", {
        jobId: this.state.jobId,
        jobURL: this.state.jobURL,
        title: this.state.title, 
        company: this.state.company,
        image: this.state.image,
        jobDescription: this.state.jobDescription,
        location: this.state.location,
        eligibility: this.state.eligibility,
        deadline: this.state.deadline,
        image: this.state.image,
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
      jobId: "",
      jobURL: "",
      title: "",
      company: "",
      image: "",
      jobDescription: "",
      location: "",
      eligibility: "",
      deadline: "",
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
      <div style={{ marginBottom: "80px" }}>
        <Form onSubmit={this.handleSubmit}>
          <Form.Label className={styles.CardTitle}>
            Post a Job Opportunity
          </Form.Label>

          <div className={styles.RectangleBasicDetails}></div>

          <Form.Group>
            <Form.Control
              style={{ marginLeft: "40px" }}
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
              style={{ marginLeft: "40px", marginTop: "30px" }}
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
              style={{ marginTop: "30px", marginLeft: "40px" }}
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
              style={{ marginTop: "30px", marginLeft: "40px" }}
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              as="textarea"
              rows={4}
              style={{ marginTop: "35px", marginLeft: "40px" }}
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
              style={{ marginTop: "30px", marginLeft: "40px" }}
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
              style={{ marginLeft: "40px", marginTop: "30px" }}
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
              style={{ marginLeft: "40px", marginTop: "30px" }}
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
              style={{ marginLeft: "40px", marginTop: "30px" }}
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

export default FullTimeForm;
