import React, { Component } from "react";
import Navbar from "../Navbar";
import { Col, Container, Jumbotron, Row, Image, Button } from "react-bootstrap";
import CodingCompCard from "./CodingCompCard";
import CodingCompImage from "../../../../Assets/coding-large.png";
import styles from "../../../../CSS/HackathonCard.module.css";
import axios from "axios";

class CodingComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount(){
    axios
      .get('https://opportunitycalendar.herokuapp.com/opportunities/competition/list/')
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
            <Container>
              <Row>
                <Col style = {{ marginTop: "20px" }}>
                  {data.map(item => {
                    return (
                      <CodingCompCard
                        key = {item.id}
                        item = {item}
                      />
                    );
                  })}
                </Col>
                <Col style = {{ marginLeft: "700px", marginTop: "20px" }}>
                  <Image
                    className = {styles.BannerImage}
                    src = {CodingCompImage}
                    alt = "CodingCompImage"
                  />
                  <Button
                    className = {styles.Button}
                    style = {{
                      padding: "5px 18px 5px 18px",
                      marginTop: "50px",
                      fontSize: "20px",
                      marginRight: "-5px"
                    }}
                  >
                    Post Opportunity
                  </Button>
                </Col>
              </Row>
            </Container>
          </Jumbotron>
        </div>
      </div>
    );
  }
}

export default CodingComp;
