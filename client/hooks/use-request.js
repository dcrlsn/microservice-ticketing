import axios from 'axios';
import { useState } from 'react';

import Alert from 'react-bootstrap/Alert';
import ListGroup from 'react-bootstrap/ListGroup';

export default ({ url, method, body, onSuccess }) => {
  const [errors, setErrors] = useState(null);

  const doRequest = async () => {
    try {
      setErrors(null);
      const response = await axios[method](url, body);
      if (onSuccess) {
        onSuccess(response.data)
      }
      return response.data;
    } catch (err) {
      setErrors(
        <Alert variant='danger'>
          <h4>Uh oh...</h4>
          <ListGroup variant="flush">
            {err.response.data.errors.map((err) => (
              <ListGroup.Item key={err.message} variant="danger">{err.message}</ListGroup.Item>
            ))}
          </ListGroup>
        </Alert>
      );
    }
  };

  return { doRequest, errors };
};
