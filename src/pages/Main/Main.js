import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Container from '../../components/Container';
import { formatPrice } from '../../util/format';

const useStyles = makeStyles({
  table: {
    minWidth: 600,
  },
});

const data = [
  {
    id: 1,
    name: 'Leilão #1',
    value: formatPrice(1000),
    is_used: 'Sim',
    is_completed: 'Não',
    responsabler: {
      name: 'Antonio Sousa'
    }
  }
];

export default function Main() {
  const classes = useStyles();

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell align="right">Valor inicial</TableCell>
              <TableCell align="right">Usado</TableCell>
              <TableCell align="right">Responsável</TableCell>
              <TableCell align="right">Finalizado</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((auction) => (
              <TableRow key={auction.id}>
                <TableCell component="th" scope="row">
                  {auction.name}
                </TableCell>
                <TableCell align="right">{auction.value}</TableCell>
                <TableCell align="right">{auction.is_used}</TableCell>
                <TableCell align="right">{auction.responsabler.name}</TableCell>
                <TableCell align="right">{auction.is_completed}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
