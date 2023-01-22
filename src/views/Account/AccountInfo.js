import React, { useEffect, useState } from 'react'
import { Container, Form, Button, FloatingLabel } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateProfile } from '../../actions/userActions';
import ErrorMessage from '../../components/errorMessage/ErrorMessage';
import Loading from '../../components/loading/Loading';
import "./AccountInfo.css"
import Bgimage from "./notesbg.jpg"


const AccountInfo = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdate = useSelector((state) => state.userUpdate);
  const { loading, error, success } = userUpdate;


  useEffect(() => {

    if(!userInfo) {
      navigate("/");
    } else {
      setName(userInfo.name);
      setEmail(userInfo.email);
    }
  }, [navigate, userInfo]);


  const submitHandler = async (e) => {
    e.preventDefault();

    dispatch(updateProfile({ name, email, password }));
    setMessage('Account info successfully updated!')
  };


  return (
    <div className="account_main_body_wrapper" style={{ backgroundImage: `url(${Bgimage})`}}>
      <Container className="account_text_wrapper" style={{height:"90vh"}}>
        <Form onSubmit={submitHandler}>
          <h1 className='accounth'>
            Update your Daily Bible Journal Account
          </h1>
          <h5 className='accounth'>
            Please continue below to make changes to your account:
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
          <h6 className='accounth'>
            Thank you for updating!
          </h6>
          <Button className="my-3 btn-lg" variant="primary" type="submit">
            Update Info
          </Button>
        {loading && <Loading />}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {success && (<ErrorMessage>{message}</ErrorMessage>)}
        </Form>
      </Container>
    </div>
  )
}

export default AccountInfo