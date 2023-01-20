import React, { useEffect, useState } from 'react'
import { Form, Button, Container, FloatingLabel, Row, Col } from 'react-bootstrap'
import axios from "axios";
import Loading from '../../components/loading/Loading';
import ErrorMessage from '../../components/errorMessage/ErrorMessage';
import { useNavigate } from 'react-router-dom';



const LogIn = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();
  const userInfo = localStorage.getItem("userInfo");

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");

    if(userInfo) {
      navigate("/journalentries");
    }
  }, [navigate, userInfo]);
  

  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      const config = {
        headers: {
          "Content-type": "application/json"
        }
      }
      
      setLoading(true)

      const { data } = await axios.post(
        "/users/login",
        {
          email,
          password
        },
        config
      );

      console.log(data);
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false)

    } catch (error) {
      setError(error.response.data.message);
      console.log(error.response.data.message);
      setLoading(false)
    }
  };

  return (
    <Container style={{height:"90vh"}}>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Form onSubmit={submitHandler}>
        <h1>
          Daily Bible Journal Account
        </h1>
        <h5>
          Login below:
        </h5>
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
        <Row>
          <Col>
            <Button className="my-3 btn-lg" variant="outline-primary" type="submit">
              Login
            </Button>
          </Col>
          {loading && <Loading />}
        </Row>
      </Form>
    </Container>
  )
}

export default LogIn;