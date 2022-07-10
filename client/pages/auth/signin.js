import { useState } from 'react';
import Router from 'next/router';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import useRequest from '../../hooks/use-request';

export default () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { doRequest, errors } = useRequest({
    url: '/api/users/signin',
    method: 'post',
    body: {
      email,
      password
    },
    onSuccess: () => Router.push('/')
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    await doRequest();
  }

  return (
    <Form onSubmit={handleSubmit}>
      {errors}
      <h1>Sign In</h1>
      <Form.Group>
        <Form.Label>Email Address</Form.Label>
        <Form.Control value={email} onChange={e => setEmail(e.target.value)} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </Form.Group>
      <Button type="submit" variant="primary">Sign In</Button>
    </Form>
  );
};
