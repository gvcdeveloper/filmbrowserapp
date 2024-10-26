import { useEffect } from 'react';
import { fetchFilms } from '../../services/filmServices/filmService';

const HelloWorld = (): JSX.Element => {
  useEffect(() => {
    const data = fetchFilms({ id: 12 });
  }, []);

  return <div>¡Hello, world!</div>;
};

export default HelloWorld;
