import { GenreDTO } from '../../types/DTO/genres';

export const genresFromAPIMapper = (genreObj: { id: number; name: string }) => {
  return {
    id: genreObj.id,
    name: genreObj.name,
  };
};
