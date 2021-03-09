import React, { Component } from "react";
import Navbar from "../Navbar";
import { Col, Container, Jumbotron, Row, Image } from "react-bootstrap";
import FullTimeCard from "./FullTimeCard";
import FullTimeImage from "../../../../Assets/fte.svg";
import styles from "../../../../CSS/FullTime.module.css";
import Button from '@material-ui/core/Button';
import axios from "axios";

class FullTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount(){
    axios
      .get('https://opportunitycalendar.herokuapp.com/opportunities/job/list/')
      .then((res) => {
        const data = res.data;
        console.log(data);
        this.setState({ data });
      }, (error) => {
        console.log(error);
      })
  }

  render() {
    const { data } = this.state;

    if(data.length === 0 || !data){
      return (
        <div>
          <Navbar/>
          <h3 style = {{textAlign: "center", marginTop: "220px", marginBottom: "200px"}}> 
            No opportunities, sorry! 
          </h3>
        </div>
      );
    }

    return (
      <div>
        <Navbar />
        <div>
          <Jumbotron style = {{backgroundColor: "white"}}>
            <div className="row">
              <div className="col-sm-10">
              {data.map(item => {
                    return (
                      <FullTimeCard 
                        key = {item.id} 
                        item = {item} 
                      />
                    );
                  })}
              </div>
         
                  <div className="col-sm-2">
                  
                  <Image
                    className = {styles.BannerImage}
                    src = {FullTimeImage}
                    alt = "FullTimeImage"
                  />
                <a  href = "/postopportunity/FullTime">  <Button variant="contained" color="primary" style={{marginTop:"1rem"}}>
                  Post Opportunity
                     </Button></a>
                
                  
                  
                  </div>
              
            </div>
                 
                 
                
             
            
          </Jumbotron>
        </div>
      </div>
    );
  }
}

export default FullTime;
