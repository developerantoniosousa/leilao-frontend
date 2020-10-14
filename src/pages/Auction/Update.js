import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import { toast } from 'react-toastify';

import Container from '../../components/Container';
import StyledLink from '../../components/StyledLink';
import { Form } from './styles';
import api from '../../services/api';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function UpdateAuction({ history, match }) {
  const [name, setName] = useState('');
  const [value, setValue] = useState(0);
  const [isUsed, setIsUsed] = useState(false);
  const classes = useStyles();
  const { id } = match.params;

  async function loadAuction() {
    try {
      const response = await api.get(`auctions/${id}`);
      setName(response.data.name);
      setValue(response.data.value);
      setIsUsed(response.data.is_used);
    } catch {
      toast.error('Houve um problema no carregamento do leilão');
    }
  }

  useEffect(() => {
    loadAuction();
  }, [id]);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await api.put(`auctions/${id}`, {
        is_used: isUsed,
        name,
        value,
      });
      toast.success('Leilão atualizado');
      history.goBack();
    } catch {
      toast.error('Houve algum problema, verifique os dados e tente novamente');
    }
  }

  return (
    <Container center>
      <Form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
        <StyledLink to="/">Voltar para os leilões</StyledLink>
        <TextField
          label="Nome"
          value={name}
          onChange={event => setName(event.target.value)}
        />
        <TextField
          label="Valor inicial"
          value={value}
          onChange={event => setValue(event.target.value)}
        />
        <FormGroup row>
          <FormControlLabel
            control={
              <Checkbox
                checked={isUsed}
                onChange={() => setIsUsed(state => !state)}
                name="is_used"
                color="primary"
              />
            }
            label="Produto usado"
          />
        </FormGroup>
        <Button type="submit" variant="contained" color="secondary">
          Atualizar
        </Button>
      </Form>
    </Container>
  );
}
