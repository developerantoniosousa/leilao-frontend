import React, { useState, useMemo } from 'react';
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

export default function AddAuction({ history }) {
  const [name, setName] = useState('');
  const [value, setValue] = useState(0);
  const [isUsed, setIsUsed] = useState(false);
  const classes = useStyles();

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await api.post('auctions', {
        is_used: isUsed,
        name,
        value,
      });
      toast.success('Leilão cadastrado');
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
          Cadastrar
        </Button>
      </Form>
    </Container>
  );
}
