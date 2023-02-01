import React from 'react'
import { Accordion, Container, Card } from 'react-bootstrap'
import "./Faqs.css"
import Bgimage from "./pisit-heng-ci1F55HaVWQ-unsplash.jpg"

const Faqs = () => {
  return (
    <div className="faq_main_body_wrapper" style={{ backgroundImage: `url(${Bgimage})`}}>
      <Container className= "faq_text_wrapper" >
        <Card className="faqCard">
          <h1 className="faqh">Faq's</h1>
          <h5 className="faqh">You got the questions, <br/> and we got the answers!</h5>
          <Accordion className="accordion">
            <Accordion.Item eventKey="1">
              <Accordion.Header>What Bible versions do you support?</Accordion.Header>
              <Accordion.Body>
                We carry hundreds of different Bible versions in various languages that are provided to us by the free API from American Bible Society.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>What happens if I cannot sign into my account?</Accordion.Header>
              <Accordion.Body>
                If you are unable to sign into your account, attempt to first reset your password. If that does not resolve your issue, please head to the <a href="/contactus">"Contact us"</a> page to find our support email.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Can I delete my account entirely?</Accordion.Header>
              <Accordion.Body>
                We are sorry to see you come here looking for an answer to such a sad question. However, yes you may permanently delete your account if you wish to do so.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>Where can I send feedback or suggestions?</Accordion.Header>
              <Accordion.Body>
                If you wish to provide any feedback or suggestions, please head on over to the <a href="/contactus">"Contact us"</a> page to find further contact information.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Card>
      </Container>
    </div>


  )
}

export default Faqs