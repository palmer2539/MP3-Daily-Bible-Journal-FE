import React from 'react'
import { Form, Button, Container, FloatingLabel } from 'react-bootstrap'

const LogIn = () => {
  return (
    <Container style={{height:"90vh"}}>
      <Form>
        <h1>
          Daily Bible Journal Account
        </h1>
        <h5>
          Login below:
        </h5>
        <Form.Group className="my-3" controlId="formBasicEmail">
          <FloatingLabel controlId="floatingInput" label="Enter a valid email">
            <Form.Control type="email"/>
          </FloatingLabel>
        </Form.Group>
        <Form.Group className="my-3" controlId="formBasicPassword">
          <FloatingLabel controlId="floatingPassword" label="Enter a password">
            <Form.Control type="password"/>
          </FloatingLabel>
        </Form.Group>
        <Button className="my-3 btn-lg" variant="outline-primary" type="submit" >
          Login
        </Button>
      </Form>
    </Container>
  )
}

export default LogIn