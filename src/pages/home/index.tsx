/* eslint-disable react/jsx-no-bind */
/* eslint-disable camelcase */
import React, { FormEvent, useState } from 'react';
import Repositories from '../../componets/list-repositories';
import api from '../../services/api';

import { Container, Form, Input, Button, Error } from './styles';

export type GitProps = {
  id: number;
  owner: {
    avatar_url: string;
    login: string;
    type: string;
  };
};

const Home: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState<GitProps[]>([]);
  const [error, setError] = useState('');

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!newRepo) {
      setError('Digite o autor/nome do repositório');
      return;
    }

    try {
      const { data } = await api.get<GitProps>(`repos/${newRepo}`);

      setRepositories([...repositories, data]);
      setNewRepo('');
      setError('');
    } catch {
      setError('Repositório não encontrado');
    }
  }
  return (
    <Container>
      <h1>Search GitHub</h1>
      <Form hasError={!!error} onSubmit={handleAddRepository}>
        <Input
          placeholder="Digite o autor/nome do repositório"
          type="text"
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
        />
        <Button type="submit">Pesquisar</Button>
      </Form>

      {error && <Error>{error}</Error>}

      <Repositories props={repositories} />
    </Container>
  );
};

export default Home;
