import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { Container, Form } from './styles';

function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Container center>
      <Form onSubmit={handleSubmit}>
        <h1>Faça login</h1>
        <TextField type="email" label="E-mail" size="small" />
        <TextField type="password" label="Senha" />
        <Button variant="contained" color="secondary">
          Entrar
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
