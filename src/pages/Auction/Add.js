import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

import Container from '../../components/Container';
import { Form } from './styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <Container center>
      <Form className={classes.root} noValidate autoComplete="off">
        <TextField label="Nome" />
        <TextField label="Valor inicial" />
        <FormGroup row>
          <FormControlLabel
            control={
              <Checkbox
                checked={true}
                onChange={() => { }}
                name="is_used"
                color="primary"
              />
            }
            label="Produto usado"
          />
        </FormGroup>
        <Button variant="contained" color="secondary">
          Cadastrar
        </Button>
      </Form>
    </Container>
  );
}
