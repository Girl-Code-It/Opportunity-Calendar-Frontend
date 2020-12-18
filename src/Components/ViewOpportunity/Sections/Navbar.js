import React ,{useState} from "react";
import styles from "../../../CSS/Navbar.module.css";
import { Navbar, Nav, Form, FormControl, Button, NavDropdown, FormGroup,Col } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai"
import Modal from 'react-modal'

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

const Navvbar=() =>{

const [modalIsSignUpOpen,setIsSignupOpen] = useState(false);
  function openSignUpModal() {
    closeLoginModal();
    setIsSignupOpen(true);
  }
 
  
 
  function closeSignUpModal(){
    setIsSignupOpen(false);
  }
  const [modalIsLoginOpen,setIsLoginOpen] = useState(false);
  function openLoginModal() {
    closeSignUpModal();
    setIsLoginOpen(true);
  }
 
  
 
  function closeLoginModal(){
    setIsLoginOpen(false);
  }
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
                    <NavDropdown.Item href = "/viewopportunity/fulltime"> Full Time Jobs </NavDropdown.Item>
                    <NavDropdown.Item href = "/viewopportunity/hackathon"> Hackathons </NavDropdown.Item>
                    <NavDropdown.Item href = "/viewopportunity/scholarship"> Scholarships </NavDropdown.Item>
                    <NavDropdown.Item href = "/viewopportunity/codingcomp"> Coding Competitions </NavDropdown.Item>
                    <NavDropdown.Item href = "/viewopportunity/techconf"> Tech Conferences </NavDropdown.Item>
                    <NavDropdown.Item href = "/viewopportunity/internships"> Internship Opportunities </NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <button className = {styles.Button} onClick={openSignUpModal}>
                Login / SignUp
            </button> 
            <Modal
          isOpen={modalIsSignUpOpen}
          
          onRequestClose={closeSignUpModal}
          style={customStyles}
          contentLabel="Signup Modal"
        >
         <Form style={{height:"565px", width:"450px"}}>
         <Form.Label className={styles.Modal_Title}> Sign Up</Form.Label>
          <div className = {styles.Rectangle}>
          </div> 
          <Form.Label className={styles.FormLabel}>Please fill this form to create your account</Form.Label>   
          <Form.Control style={{marginLeft:"20px" , width:"410px",marginTop:"10px"}} className={styles.Input} type="text" placeholder="First Name" required/>
          <Form.Control style={{marginLeft:"20px", marginTop:"20px", width:"410px"}} className={styles.Input} type="text" placeholder="Last Name" required/>
          <Form.Control style={{marginLeft:"20px", marginTop:"20px", width:"410px"}} className={styles.Input} type="email" placeholder="Email" required/>
          <Form.Control style={{marginLeft:"20px", marginTop:"20px", width:"410px"}} className={styles.Input} type="password" placeholder="Password" required/>
          <Form.Control style={{marginLeft:"20px", marginTop:"20px", width:"410px"}} className={styles.Input} type="password" placeholder="Confirm Password" required/>
          <Form.Group>
        <Form.Check
        style={{marginLeft:"30px" , marginTop:"20px"}}
          required
          label="I accept the Terms Of Conditions & Privacy Policy"
          feedback="You must agree before submitting."
        />
      </Form.Group>
        <Button type="submit" className={styles.Button} style={{marginLeft:"30px", marginTop:"10px",fontSize:"15px"}}>SignUp</Button>
        <Form.Group>
        <Form.Row>
            <Form.Group as={Col}>
            <Form.Label
          style={{marginLeft:"30px" , marginTop:"20px",  color: "#848e92be"}}
        >Already have an account?</Form.Label>
            </Form.Group>
            <Form.Group as={Col}>
            <Form.Label onClick={openLoginModal}
          style={{marginTop:"20px",  color: "#008dc8"}}
        >Login</Form.Label>
            </Form.Group>
        </Form.Row>
        
      </Form.Group>
         </Form>

        </Modal>
         
        <Modal
          isOpen={modalIsLoginOpen}
          
          onRequestClose={closeLoginModal}
          style={customStyles}
          contentLabel="Signup Modal"
        >
         <Form style={{height:"280px", width:"360px"}}>
         <Form.Label className={styles.Modal_Title}> Login</Form.Label>
          <div className = {styles.Rectangle} style={{width:"75px"}}>
          </div> 
           <Form.Control style={{marginLeft:"20px", marginTop:"20px", width:"320px"}} className={styles.Input} type="email" placeholder="Email" required/>
           <Form.Control style={{marginLeft:"20px", marginTop:"20px", width:"320px"}} className={styles.Input} type="password" placeholder="Password" required/>
        <Button type="submit" className={styles.Button} style={{marginLeft:"30px", marginTop:"30px",fontSize:"20px"}}>Login</Button>
         </Form>
         <Form.Row>
            <Form.Group as={Col} md="8">
            <Form.Label
          style={{marginLeft:"30px" , marginTop:"20px",  color: "#848e92be"}}
        >Don't have an account?</Form.Label>
            </Form.Group>
            <Form.Group as={Col} >
            <Form.Label onClick={openSignUpModal}
          style={{marginTop:"20px", color: "#008dc8"}}
        >SignUp</Form.Label>
            </Form.Group>
        </Form.Row>
        </Modal>

        </Navbar.Collapse>
    </Navbar>
  );
}

export default Navvbar;