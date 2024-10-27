import { useEffect } from 'react';
import {
  fetchFilmsByGenre,
  fetchFilmByID,
} from '../../services/filmServices/filmService';

const HelloWorld = (): JSX.Element => {
  useEffect(() => {
    const data = fetchFilmByID({ id: 912649 });
    console.log(data);
  }, []);

  return <div>¡Hello, world!</div>;
};

export default HelloWorld;
