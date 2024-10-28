import { GenreDTO } from '../../types/DTO/genres';

export const genresFromAPIMapper = (genres: GenreDTO[]) => {
  return genres.reduce(
    (acc, item: GenreDTO) => {
      const keyValue = item.name;
      if (keyValue !== undefined) {
        acc[keyValue as string] = item.id;
      }
      return acc;
    },
    {} as { [key: string]: number }
  );
};
