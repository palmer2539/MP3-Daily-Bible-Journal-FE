import React, { useEffect, useState } from 'react';
import { Form, Button, Container, FloatingLabel, Row, Col } from 'react-bootstrap';
import Loading from '../../components/loading/Loading';
import ErrorMessage from '../../components/errorMessage/ErrorMessage';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/userActions';
import "./LogIn.css"
import Bgimage from "./notesbg.jpg"


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
    <div className="login_main_body_wrapper" style={{ backgroundImage: `url(${Bgimage})`}}>
      <Container className="login_text_wrapper" style={{height:"90vh"}}>
        <Form onSubmit={submitHandler}>
          <h1 className='loginh'>
            Daily Bible Journal Account
          </h1>
          <h3 className='loginh'>
            Login below:
          </h3>
          <Form.Group className="my-3" controlId="formBasicEmail">
            <FloatingLabel controlId="floatingInput" label="Enter your email">
              <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="my-3" controlId="formBasicPassword">
            <FloatingLabel controlId="floatingPassword" label="Enter your password">
              <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </FloatingLabel>
          </Form.Group>
          <Row>
            <Col>
              <Button className="my-3" variant="primary" type="submit" size="lg">
                Login
              </Button>
            </Col>
            {loading && <Loading />}
          </Row>
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </Form>
      </Container>

    </div>
  )
}

export default LogIn;