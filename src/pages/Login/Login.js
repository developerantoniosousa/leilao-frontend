import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { toast } from 'react-toastify';

import api from '../../services/api';
import { Container, Form } from './styles';

function Login({ reloadApp }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await api.post('sessions', { email, password });
      localStorage.setItem('@leilao:token', response.data.token);
      reloadApp();
    } catch {
      toast.error('Verifique seus dados e tente novamente');
    }
  };

  return (
    <Container center>
      <Form onSubmit={handleSubmit}>
        <h1>Faça login</h1>
        <TextField
          type="email"
          label="E-mail"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
        <TextField
          type="password"
          label="Senha"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
        <Button type="submit" variant="contained" color="secondary">
          Entrar
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
