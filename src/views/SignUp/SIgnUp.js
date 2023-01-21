import React, { useEffect, useState } from 'react'
import { Container, Form, Button, FloatingLabel } from 'react-bootstrap';
import ErrorMessage from '../../components/errorMessage/ErrorMessage';
import Loading from '../../components/loading/Loading';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../../actions/userActions';
import "./SignUp.css"
import Bgimage from "./notesbg.jpg"

const SignUp = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();
  const userInfo = localStorage.getItem("userInfo");

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");

    if(userInfo) {
      navigate("/journalentries");
    }
  }, [navigate, userInfo]);


  const dispatch = useDispatch();

  const userSignup = useSelector(state => state.userSignup);
  const { loading, error } = userSignup;


  const submitHandler = async (e) => {
    e.preventDefault();

    if( password !== confirmPassword) {
      setMessage('The entered passwords do not match. Please enter them again.')
    } else {
      dispatch(signup(name, email, password));
    }
  };


  return (
    <div className="signup_main_body_wrapper" style={{ backgroundImage: `url(${Bgimage})`}}>
      <Container className="signup_text_wrapper" style={{height:"90vh"}}>
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
            <Button className="my-3 btn-lg" variant="primary" type="submit">
              Sign Up
            </Button>
            {loading && <Loading />}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {message && <ErrorMessage>{message}</ErrorMessage>}
        </Form>
      </Container>
    </div>
  )
}

export default SignUp;