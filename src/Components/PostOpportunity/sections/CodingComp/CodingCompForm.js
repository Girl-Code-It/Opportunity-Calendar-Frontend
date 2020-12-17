import React, { Component} from "react";
import { Form } from "react-bootstrap"
import styles from "../../../../CSS/CodingCompForm.module.css";

class CodingCompForm extends Component {
  render(){
      return(
        <div style = {{marginBottom: "80px"}}>
            <Form>
                <Form.Label className = {styles.CardTitle}>
                    Post a Coding Competition
                </Form.Label>

                <div className = {styles.RectangleBasicDetails}></div>              
                
                <Form.Control style = {{marginLeft: "40px"}} className = {styles.Input} type = "text" placeholder = "Coding Competition Name"/>
                <Form.Control className = {styles.Input} type = "text" placeholder = "Logo URL" style = {{marginLeft:"40px", marginTop:"30px"}}/> 
                
                <Form.Control as = "textarea" rows = {4} style = {{marginTop:"35px", marginLeft:"40px"}} placeholder = "Short Description"/>
                
                <Form.Control className = {styles.Input} type = "text" placeholder = "Date of Competition" style = {{marginTop:"30px", marginLeft:"40px"}}/>
                <Form.Control className = {styles.Input} type = "text" placeholder = "Location" style = {{marginLeft:"40px", marginTop:"30px"}}/> 
                <Form.Control className = {styles.Input} type = "text" placeholder = "Last Date to Apply" style = {{marginTop:"30px", marginLeft:"40px"}}/>
                <Form.Control className = {styles.Input} type = "text" placeholder = "Eligibility" style = {{marginLeft:"40px", marginTop:"30px"}}/>  
                <Form.Control className = {styles.Input} type = "text" placeholder = "Website" style = {{marginLeft:"40px", marginTop:"30px"}}/> 
            </Form>
        </div>
      );
  }
}

export default CodingCompForm;
