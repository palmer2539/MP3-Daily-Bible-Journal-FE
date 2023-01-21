import React from 'react';
import "./LandingPage.css";
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Stack } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Bgimage from './landingPageBackground.jpg'



const LandingPage = () => {

  return (
    <div className="main_body_wrapper" style={{ backgroundImage: `url(${Bgimage})`}}>
      <Container className="text_wrapper main_body_wrapper" fluid>
      <Card className='landingCard'>
        <Row>
          <Stack gap={3}>
            <h1 className="landing_page_text_color">
              Welcome to your Daily Bible Journal!
            </h1>
            <h2 className="landing_page_text_color">
              Read and annotate now!
            </h2>
            <Col className="sign_up_button">
              <a href="/signup">
                <Button size="lg">
                  Sign up
                </Button>
              </a>
            </Col>
            <Col className="log_in_button">
              <a href="/login">
                <Button variant="secondary" size="md">
                  Log in
                </Button>
              </a>
            </Col>
          </Stack>
        </Row>
      </Card>
      </Container>
    </div>
  )
}

export default LandingPage;