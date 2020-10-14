import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Alert, AlertTitle } from '@material-ui/lab';
import CircularProgress from '@material-ui/core/CircularProgress';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { MdEdit, MdDelete } from 'react-icons/md';

import Container from '../../components/Container';
import StyledLink from '../../components/StyledLink';
import { formatPrice } from '../../util/format';
import api from '../../services/api';

const useStyles = makeStyles({
  table: {
    minWidth: 600,
  },
});

export default function Main() {
  const [auctions, setAuctions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const classes = useStyles();

  async function loadAuctions() {
    try {
      const response = await api.get('auctions');
      const data = response.data.map(auction => ({
        ...auction,
        is_completed: auction.is_completed ? 'Sim' : 'Não',
        is_used: auction.is_used ? 'Sim' : 'Não',
        value: formatPrice(auction.value)
      }))
      setAuctions(data);
      setIsLoading(false);
    } catch {
      toast.error('Falha no carregamento dos leilões');
      setHasError(true);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadAuctions();
  }, []);

  async function handleDelete(id, name) {
    try {
      await api.delete(`auctions/${id}`);
      toast.success('O leilão foi excluido');
      loadAuctions();
    } catch {
      toast.error(`O leilão ${name} não pode ser excluido`);
    }
  }

  if (isLoading) {
    return (
      <Container center>
        <CircularProgress color="#37B6C4" />
      </Container>
    )
  }

  if (hasError) {
    return (
      <Container>
        <Alert severity="error">
          <AlertTitle>Ocorreu algum erro. Tente acessar novamente mais tarde.</AlertTitle>
        </Alert>
      </Container>
    );
  }

  return (
    <Container>
      <StyledLink to="/auction/new">
        Adicionar leilão
      </StyledLink>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell align="right">Valor inicial</TableCell>
              <TableCell align="right">Usado</TableCell>
              <TableCell align="right">Responsável</TableCell>
              <TableCell align="right">Finalizado</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {auctions.map((auction) => (
              <TableRow key={auction.id}>
                <TableCell component="th" scope="row">
                  {auction.name}
                </TableCell>
                <TableCell align="right">{auction.value}</TableCell>
                <TableCell align="right">{auction.is_used}</TableCell>
                <TableCell align="right">{auction.responsabler?.email}</TableCell>
                <TableCell align="right">{auction.is_completed}</TableCell>
                <TableCell align="right">
                  <Link to={`/auction/update/${auction.id}`}>
                    <MdEdit size={20} color="#000" />
                  </Link>
                  <MdDelete
                    size={20}
                    color="#f00"
                    onClick={() => handleDelete(auction.id, auction.name)}
                    style={{ cursor: 'pointer', marginLeft: 5 }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
