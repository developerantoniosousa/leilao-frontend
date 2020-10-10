import styled from 'styled-components';
import { darken } from 'polished';

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  button {
    background: #37B6C4;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, '#37B6C4')};
    }
  }
`;
