/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;

  ul {
    display: flex;
    justify-content: center;

    img {
      width: 3rem;
      height: 3rem;
    }

    p {
      color: #ddd;
      margin-left: 2rem;
      font-size: 1rem;

      li {
        font-size: 1rem;
        color: #000;
        list-style: none;
        margin-top: 0.8rem;
      }
    }
  }
`;
