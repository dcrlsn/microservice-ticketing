import { useState } from 'react';
import axios from 'axios';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import ListGroup from 'react-bootstrap/ListGroup';

export default () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/users/signup', { email, password })
    } catch (err) {
      setErrors(err.response.data.errors)
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      {errors.length > 0 && <Alert key='danger' variant='danger'>
        <h4>Something went wrong...</h4>
        <ListGroup variant="flush">
          {errors.map(err => { <ListGroup.Item key={err.message}>{err.message}</ListGroup.Item> }
          )}
        </ListGroup>
      </Alert>}
      <h1>Sign Up</h1>
      <Form.Group>
        <Form.Label>Email Address</Form.Label>
        <Form.Control value={email} onChange={e => setEmail(e.target.value)} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </Form.Group>
      <Button type="submit" variant="primary">Sign Up</Button>
    </Form>
  );
};
