import React from "react";
import styles from "../../../CSS/Navbar.module.css";
import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai"

function navbar() {
  return (
    <Navbar fixed = "top" bg = "light" expand = "lg" className = {styles.NavBar}>
        <Navbar.Brand className = {styles.Logo}>
            <a href = "/" className = {styles.Brand} style = {{fontSize: "35px"}}>
                Girl 
                <span style = {{ color: "#008dc8" }}> Code </span> 
                It
            </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls = "basic-navbar-nav" />
        <Navbar.Collapse id = "basic-navbar-nav" className = {styles.ShiftRight}>
            <Form inline>
                <div className = {styles.Middle}>
                    <FormControl 
                        type = "text" 
                        placeholder = "Search" 
                        className = {styles.Search} 
                    />
                    <Button className = {styles.SearchButton}>
                        <AiOutlineSearch />
                    </Button>
                </div>
            </Form>
            <Nav className = "mr-auto">
                <NavDropdown 
                    title = {
                        <span className = {styles.Title}>
                            Opportunities
                        </span>
                    } 
                    id = "basic-nav-dropdown" 
                    className = {styles.Dropdown}
                >
                    <NavDropdown.Item href = "/PostOpportunity/FullTime"> Full Time Jobs </NavDropdown.Item>
                    <NavDropdown.Item href = "/PostOpportunity/Hackathons"> Hackathons </NavDropdown.Item>
                    <NavDropdown.Item href = "/PostOpportunity/Scholarships"> Scholarships </NavDropdown.Item>
                    <NavDropdown.Item href = "/PostOpportunity/CodingComp"> Coding Competitions </NavDropdown.Item>
                    <NavDropdown.Item href = "/PostOpportunity/TechConf"> Tech Conferences </NavDropdown.Item>
                    <NavDropdown.Item href = "/PostOpportunity/Internships"> Internship Opportunities </NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <button className = {styles.Button}>
                Login / SignUp
            </button>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default navbar;