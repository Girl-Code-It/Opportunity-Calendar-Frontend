import React from 'react';
import axios from 'axios';
import { OpportunityCard } from './OpportunityCard';
import {
  Card,
  Col,
  Container,
  Jumbotron,
  Row,
  Image,
  Button,
  NavDropdown,
} from 'react-bootstrap';
import styles from './Opportunity.module.css';
import Navbar from './Navbar';


const mapPathToResource = {
  conference: { image: import('../../Assets/conference-large.png') },
  competition: { image: import('../../Assets/coding-large.png') },
  scholarship: { image: import('../../Assets/scholarship-large.png') },
  hackathon: { image: import('../../Assets/hackathon-large.png') },
  intern: { image: import('../../Assets/internships-large.png') },
  job: { image: import('../../Assets/fte.svg') },
};

/**
 * @param {Object} props
 * @param {string} props.path - API path. something like `internships`
 */

const URL = window.location.href;
const splitUrl = URL.split('/viewopportunity/')[1];
const mapUrlToName = {
  techconf: 'Tech Conferences',
  codingcomp: 'Coding Competitions',
  scholarship: 'Scholarships' ,
  hackathon: 'Hackathons',
  internships: 'Internship Opportunities' ,
  fulltime: 'Full Time Jobs',
};


export function ViewOpportunity(props) {
  const [data, setData] = React.useState([]);
  const [imgSrc, setImgSrc] = React.useState();
  const [postOpportunityPath, setPostOpportunityPath] = React.useState();

  // whenever props.path changes, get latest data from backend
  React.useEffect(() => {
    axios
      .get(generateAPIEndpoint(props.path))
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err.stack));
  }, [props.path]);

  // lazy load image
  React.useEffect(() => {
    mapPathToResource[props.path].image.then((mod) => setImgSrc(mod.default));
  }, [props.path]);

  // as the last chunk of ViewOpportunity and PostOpportunity is same, we can
  // simply extract it from the URL. passing a prop is not necessary
  React.useEffect(() => {
    const pathname = window.location.pathname;
    const lastChunk = pathname.split('/').pop();
    lastChunk && setPostOpportunityPath(`/postopportunity/${lastChunk}`);
  }, []);

  if (data.length === 0 || !data) { 
    return (
      <div>
        <Navbar />
        <h3
          style={{
            textAlign: 'center',
            marginTop: '220px',
            marginBottom: '200px',
          }}
        >
          Loading Opportunities if any...
        </h3>
      </div>
    );
  }
  
  const data_length = data.length // used to check whether opportunity count is 0
    
  return (
    <>
      { data_length === 0 ? (
      <div>
        <Navbar />
        <h3
          style={{
            textAlign: 'center',
            marginTop: '220px',
            marginBottom: '200px',
          }}
        >
          No opportunities found!!
        </h3>
      </div>) :
      <div>
        <Navbar />
        <div>

        <Card className="text-center" >
 
 <Card.Body style={{backgroundColor: '#BD6997', marginTop: '7rem' , height:'10rem'}}>
   <Card.Title> 
     
                 </Card.Title>
   <Card.Text>
               
   <Button variant="primary"  href={postOpportunityPath} style={{ borderRadius:'5 5 5 5', borderWidth:'0 0 0 0'}} className={styles.Button}><span style={{fontWeight:'bold'}} >
   Post Opportunity
     </span></Button>
 


   </Card.Text>
  
 </Card.Body>


</Card>
          <Jumbotron style={{ backgroundColor: 'white' , marginTop:'5rem'}}>
          
            <Container>
              <Row>
              <NavDropdown
            title={<span className={styles.Title} style={{fontSize:'30px' , fontFamily: 'Arial, Helvetica, sans-serif',
            marginRight: '10px', marginTop:'0' }}>{mapUrlToName[splitUrl]}</span>}
            id="dropdown-basic-button" 
            className={styles.Dropdown}
          >
            <NavDropdown.Item href="/viewopportunity/fulltime">
              {' '}
              Full Time Jobs{' '} 
            </NavDropdown.Item>
            <NavDropdown.Item href="/viewopportunity/hackathon">
              {' '}
              Hackathons{' '}
            </NavDropdown.Item>
            <NavDropdown.Item href="/viewopportunity/scholarship">
              {' '}
              Scholarships{' '}
            </NavDropdown.Item>
            <NavDropdown.Item href="/viewopportunity/codingcomp">
              {' '}
              Coding Competitions{' '}
            </NavDropdown.Item>
            <NavDropdown.Item href="/viewopportunity/techconf">
              {' '}
              Tech Conferences{' '}
            </NavDropdown.Item>
            <NavDropdown.Item href="/viewopportunity/internships">
              {' '}
              Internship Opportunities{' '}
            </NavDropdown.Item>
          </NavDropdown>
              </Row>
            

              <Row>
                <Col style={{ marginTop: '20px' }} md={12}>
                  {data.map((item) => {
                    return <OpportunityCard key={item.id} item={item} />;
                  })}
                </Col>

              </Row>
            </Container>

          </Jumbotron>
        </div>
      </div>
      }
      );
    </>
  );
}

/**
 * @param {string} pathChunk API endpoint path for this specific job listing
 */
function generateAPIEndpoint(pathChunk) {
  return `https://opportunitycalendar.herokuapp.com/opportunities/${pathChunk}/list/`;
}
