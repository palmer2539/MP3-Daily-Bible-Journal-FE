import React from 'react'
import { Container, Card } from 'react-bootstrap'
import Bgimage from "./contactbg.jpg"
import './Contactus.css';


const Contactus = () => {
  return (
    <div className="contact_main_body_wrapper" style={{ backgroundImage: `url(${Bgimage})`}}>
      <Container className= "contact_text_wrapper">
      <Card className="contactInfoCard" style={{padding: "50px 50px", "font-size": 25}}>
        <h1>Contact us</h1>
        <h4>Hi, if for any reason you need to contact us, feel free to reach us via the following methods:</h4>
        <p/>
        <p>support@dailybiblejournal.com</p>

        <p>417 Matthew Dr<br/>New Testament, Earth 00001</p>

      </Card>

      </Container>
    </div>
  )
}

export default Contactus;