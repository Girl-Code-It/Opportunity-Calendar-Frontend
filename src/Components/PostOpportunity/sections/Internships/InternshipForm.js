import React, { Component} from "react";
import { Button, Form } from "react-bootstrap"
import styles from "../../../../CSS/InternshipForm.module.css";

class InternshipForm extends Component {
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
      deadline: ""
    };
  }

  handleChange = (event) => {
    let itemValue = event.target.value;
    this.setState({
      [event.target.name]: itemValue
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `${this.state.jobId} ${this.state.jobURL} ${this.state.title} ${this.state.company} ${this.state.image} ${this.state.jobDescription} ${this.state.location} ${this.state.eligibility} ${this.state.deadline}`
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
      deadline: ""
    });
  };

  render(){
      const { jobId, jobURL, title, company, image, jobDescription, location, eligibility, deadline } = this.state;

      return(
        <div style = {{marginBottom: "80px"}}>
            <Form onSubmit = {this.handleSubmit}>
                <Form.Label className = {styles.CardTitle}>
                    Post an Internship Opportunity
                </Form.Label>

                <div className = {styles.RectangleBasicDetails}></div>              
                
                <Form.Group>
                  <Form.Control 
                    style = {{marginLeft: "40px"}} 
                    className = {styles.Input} 
                    type = "text" 
                    name = "company"
                    value = {company}
                    placeholder = "Company Name"
                    onChange = {this.handleChange}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Control 
                    className = {styles.Input} 
                    type = "text" 
                    name = "image"
                    value = {image} 
                    placeholder = "Company Logo URL" 
                    onChange = {this.handleChange}
                    style = {{marginLeft:"40px", marginTop:"30px"}}
                  /> 
                </Form.Group>

                <Form.Group>
                  <Form.Control 
                    className = {styles.Input} 
                    type = "text" 
                    name = "title"
                    value = {title} 
                    placeholder = "Opportunity Title" 
                    onChange = {this.handleChange}
                    style = {{marginTop:"30px", marginLeft:"40px"}}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Control 
                    className = {styles.Input} 
                    type = "text" 
                    name = "jobId"
                    value = {jobId} 
                    placeholder = "Job ID" 
                    onChange = {this.handleChange}
                    style = {{marginTop:"30px", marginLeft:"40px"}}
                  />
                </Form.Group>
                
                <Form.Group>
                  <Form.Control 
                    as = "textarea" 
                    rows = {4} 
                    style = {{marginTop:"35px", marginLeft:"40px"}} 
                    name = "jobDescription"
                    value = {jobDescription} 
                    placeholder = "Short Description"
                    onChange = {this.handleChange}
                  />
                </Form.Group>
                
                <Form.Group>
                  <Form.Control 
                    className = {styles.Input} 
                    type = "text" 
                    name = "deadline"
                    value = {deadline} 
                    placeholder = "Last Date to Apply" 
                    style = {{marginTop:"30px", marginLeft:"40px"}}
                    onChange = {this.handleChange}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Control 
                    className = {styles.Input} 
                    type = "text" 
                    name = "location"
                    value = {location} 
                    placeholder = "Location" 
                    style = {{marginLeft:"40px", marginTop:"30px"}}
                    onChange = {this.handleChange}
                  /> 
                </Form.Group>

                <Form.Group>
                  <Form.Control 
                    className = {styles.Input} 
                    type = "text" 
                    name = "eligibility"
                    value = {eligibility} 
                    placeholder = "Eligibility" 
                    style = {{marginLeft:"40px", marginTop:"30px"}}
                    onChange = {this.handleChange}
                  />  
                </Form.Group>

                <Form.Group>
                  <Form.Control 
                    className = {styles.Input} 
                    type = "text" 
                    name = "jobURL"
                    value = {jobURL} 
                    placeholder = "Website" 
                    style = {{marginLeft:"40px", marginTop:"30px"}}
                    onChange = {this.handleChange}
                  /> 
                </Form.Group>

                <Form.Group>
                  <Button className = {styles.Button} type = "submit">
                    Submit
                  </Button>
                </Form.Group>
            </Form>
        </div>
      );
  }
}

export default InternshipForm;
