import React, { Component } from "react";
import Navbar from "../Navbar";
import { Col, Container, Jumbotron, Row, Image, Button } from "react-bootstrap";
import InternshipsCard from "./InternshipsCard";
import HackathonImage from "../../../../Assets/internships-large.png";
import styles from "../../../../CSS/HackathonCard.module.css";
import axios from "axios";

class Internships extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://opportunitycalendar.herokuapp.com/opportunities/intern/list/"
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
  }

  render() {
    const { data } = this.state;

    if (data.length === 0 || !data) {
      return (
        <div>
          <Navbar />
          <h3
            style={{
              textAlign: "center",
              marginTop: "220px",
              marginBottom: "200px",
            }}
          >
            No opportunities, sorry!
          </h3>
        </div>
      );
    }

    return (
      <div>
        <Navbar />
        <div>
          <div className = {styles.Background}>
            <h1 className = {styles.Opportunity}> Internship Opportunities </h1>
          </div>
          <Jumbotron style={{ backgroundColor: "white" }}>
            <Container>
              {/* <Row>
                <Col style={{ marginTop: "20px" }}> */}
                  {data.map((item) => {
                    return <InternshipsCard key={item.id} item={item} />;
                  })}
                {/* </Col>
                <Col style={{ marginLeft: "700px", marginTop: "20px" }}>
                  <Image
                    className={styles.BannerImage}
                    src={HackathonImage}
                    alt="HackathonImage"
                  ></Image>
                  <Button
                    className={styles.Button}
                    href="/PostOpportunity/Internships"
                    style={{
                      padding: "5px 18px 5px 18px",
                      marginTop: "50px",
                      fontSize: "20px",
                      marginRight: "-5px",
                    }}
                  >
                    Post Opportunity
                  </Button>
                </Col>
              </Row> */}
            </Container>
          </Jumbotron>
        </div>
      </div>
    );
  }
}

export default Internships;
