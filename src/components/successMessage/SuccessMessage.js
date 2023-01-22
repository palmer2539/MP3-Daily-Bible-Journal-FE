import React from 'react'
import { Alert } from 'react-bootstrap';


const SuccessMessage = ({children}) => {
  return (
    <Alert className="my-3" variant="success">
      <Alert.Heading>Success!</Alert.Heading>
      <p>
        {children}
      </p>
    </Alert>
  )
};

export default SuccessMessage;