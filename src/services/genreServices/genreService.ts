import { apiFetch } from '../apiFetch';
import { GET_GENRES } from '../endpoints';
import { genresFromAPIMapper } from '../mappers/genreServiceMappers';
import { GenreDTO, GenreResponseDTO } from '../../types/DTO/genres';
import { Genre } from '../../types/models/genre';

interface GenreListProps {
  lang?: string;
}

export const fetchGenreList = async ({
  lang = 'en-US',
}: GenreListProps): Promise<{ [name: string]: number }> => {
  const options = {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_TOKEN}`,
    },
  };
  const url = `${GET_GENRES}?language=${lang}`;
  const { genres } = await apiFetch<GenreResponseDTO>(url, options);

  const mappedResults = genresFromAPIMapper(genres);

  return mappedResults;
};
