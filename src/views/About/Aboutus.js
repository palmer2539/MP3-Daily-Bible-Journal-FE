import React from 'react';
import { Container, Card } from 'react-bootstrap';
import Bgimage from './aboutUsBG.jpg'
import "./Aboutus.css";

const Aboutus = () => {
  return(
    <div className="about_main_body_wrapper" style={{ backgroundImage: `url(${Bgimage})`}}>
      <Container className="about_text_wrapper">
        <Card className="infoCard" style={{padding: "50px 50px"}}> 
          <h1>About us</h1>

            <h3>Welcome to Daily Bible Journal!</h3>

            <h6>At Daily Bible Journal we believe it is as important to notate your learnings while reading The Bible.</h6>
              
            <h6>This is your one stop to reading The Bible and saving your notes all in one place! Gone are the days of needing to keep track of all your notes. 
            If you have further questions, head on over to our <a href="/faqs">"FAQ"</a> page to see if we already answered them!</h6>
        </Card>
      </Container>
    </div>
  );
};

export default Aboutus;