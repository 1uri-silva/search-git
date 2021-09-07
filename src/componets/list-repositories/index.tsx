import React from 'react';

import { Container } from './styles';

import { GitProps } from '../../pages/home';

type Props = {
  props: GitProps[];
};

const Repositories: React.FC<Props> = ({ props }) => {
  return (
    <Container>
      {props.map(({ id, owner }) => (
        <ul key={id}>
          <img src={owner.avatar_url} alt={owner.login} />
          <p>
            Usuário
            <li>{owner.login}</li>
          </p>
          <p>
            Usuário/Organização
            <li>{owner.type}</li>
          </p>
        </ul>
      ))}
    </Container>
  );
};

export default Repositories;
