import React from 'react'
import { Alert } from 'react-bootstrap';


const ErrorMessage = ({children}) => {
  return (
    <Alert className="my-3" variant="danger">
      <Alert.Heading>Issue detected!</Alert.Heading>
      <p>
        {children}
      </p>
    </Alert>
  )
};

export default ErrorMessage;