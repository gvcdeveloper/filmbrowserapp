import { GenreDTO } from '../../types/DTO/genres';

export const genresFromAPIMapper = (genreObj: GenreDTO) => {
  return {
    id: genreObj.id,
    name: genreObj.name,
  };
};
