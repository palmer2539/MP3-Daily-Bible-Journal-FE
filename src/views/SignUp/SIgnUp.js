import axios from 'axios';
import React, { useState } from 'react'
import { Container, Form, Button, FloatingLabel } from 'react-bootstrap';
import ErrorMessage from '../../components/errorMessage/ErrorMessage';
import Loading from '../../components/loading/Loading';



const SignUp = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();

    if(password !== confirmPassword) {
      setMessage("The entered passwords do not match. ")
    } else {
      setMessage(null)
      try {
        const config = {
          headers: {
            "Content-type": "application/json"
          },
        };

        setLoading(true);

        const { data } = await axios.post(
          "/users",
          {name, email, password},
          config
        )
        
        console.log(data);
        setLoading(false);
        localStorage.setItem("userInfo", JSON.stringify(data));

      } catch (error) {
        setError(error.response.data.message);
      };
    };

    console.log(name, email, password)
  }


  return (
    <Container style={{height:"90vh"}}>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {message && <ErrorMessage>{message}</ErrorMessage>}
      <Form onSubmit={submitHandler}>
       <h1>
          Create your Daily Bible Journal Account
        </h1>
        <h5>
          Please fill out the form below to create your account:
        </h5>
        <Form.Group className="my-3" controlId="formBasicEmail">
          <FloatingLabel controlId="floatingInput" label="Enter your full name">
            <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)}/>
          </FloatingLabel>
        </Form.Group>
        <Form.Group className="my-3" controlId="formBasicEmail">
          <FloatingLabel controlId="floatingInput" label="Enter a valid email">
            <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </FloatingLabel>
        </Form.Group>
        <Form.Group className="my-3" controlId="formBasicPassword">
          <FloatingLabel controlId="floatingPassword" label="Enter a password">
            <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </FloatingLabel>
        </Form.Group>
        <Form.Group className="my-3" controlId="formBasicPassword">
          <FloatingLabel controlId="floatingPassword" label="Re-enter your password to confirm">
            <Form.Control type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
          </FloatingLabel>
        </Form.Group>
        <h6>
          We'll never share your email with anyone else.
        </h6>
        <Button className="my-3 btn-lg" variant="outline-primary" type="submit">
          Sign Up
        </Button>
        {loading && <Loading />}
      </Form>
    </Container>
  )
}

export default SignUp;