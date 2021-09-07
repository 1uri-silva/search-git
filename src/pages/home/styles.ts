import styled, { css } from 'styled-components';

type FormProps = {
  hasError: boolean;
};

export const Container = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 2rem;
    color: #ffffff;
    text-align: center;
    margin-top: 4rem;
    margin-bottom: 8rem;
  }
`;

export const Form = styled.form<FormProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${(props) =>
    props.hasError &&
    css`
      border-color: #c53030;
    `}
  &::placeholder {
    color: #a8a8b3;
  }
`;

export const Error = styled.span`
  display: flex;
  color: #c53030;
  margin-top: 1.3rem;
  text-align: center;
`;

export const Input = styled.input`
  text-align: center;
  padding: 0.5rem;
  background: #ffffff;
  border: none;
  border-radius: 0.5rem;
  height: 2.5rem;
  width: 20rem;
`;

export const Button = styled.button`
  border-radius: 0.5rem;
  justify-content: center;
  padding: 0.5rem;
  background: #ffffff;
  border: none;
  height: 2.5rem;
  width: 5.3rem;
  margin-left: 1rem;

  :hover {
    background: blueviolet;
    color: #ffffff;
    opacity: 0.3;
  }
`;
