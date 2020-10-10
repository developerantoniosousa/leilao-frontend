import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content:center;
  align-items:center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 380px;
  width: 100%;
  min-width: 320px;
  background: #fff;
  padding: 50px;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0,0,0,0.1);

  .MuiFormControl-root {
    margin-top: 20px;
  }

  h1 {
    font-size: 25px;
    font-weight: bold;
  }

  button {
    margin-top: 40px;
    background: #37B6C4;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, '#37B6C4')};
    }
  }
`;
