import React, { useEffect, useState } from 'react';
import { Form, Button, Container, FloatingLabel, Row, Col } from 'react-bootstrap';
import Loading from '../../components/loading/Loading';
import ErrorMessage from '../../components/errorMessage/ErrorMessage';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/userActions';



const LogIn = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();
  const userInfo = localStorage.getItem("userInfo");

  useEffect(() => {
    if(userInfo) {
      navigate("/journalentries");
    }
  }, [navigate, userInfo]);
  

  const dispatch = useDispatch();

  const userLogin = useSelector(state => state.userLogin);
  const { loading, error } = userLogin;

  const submitHandler = async (e) => {
    e.preventDefault()
    dispatch(login(email, password));
    
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