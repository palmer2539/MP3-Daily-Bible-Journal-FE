import React from 'react'
import { Container, Form, Button, FloatingLabel } from 'react-bootstrap';

const SignUp = () => {
  return (
    <Container style={{height:"90vh"}}>
      <Form>
       <h1>
          Create your Daily Bible Journal Account
        </h1>
        <h5>
          Please fill out the form below to create your account:
        </h5>
        <Form.Group className="my-3" controlId="formBasicEmail">
          <FloatingLabel controlId="floatingInput" label="Enter your full name">
            <Form.Control type="text"/>
          </FloatingLabel>
        </Form.Group>
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
        <Form.Group className="my-3" controlId="formBasicPassword">
          <FloatingLabel controlId="floatingPassword" label="Re-enter your password to confirm">
            <Form.Control type="password"/>
          </FloatingLabel>
        </Form.Group>
        <h6>
          We'll never share your email with anyone else.
        </h6>
        <Button className="my-3 btn-lg" variant="outline-primary" type="submit">
          Sign Up
        </Button>
      </Form>
    </Container>
  )
}

export default SignUp;