import styled, { css } from 'styled-components';

const Container = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 6px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;

  ${({ center }) => center && css`
    display: flex;
    justify-content: center;
    align-items: center;
  `};
`;

export default Container;
