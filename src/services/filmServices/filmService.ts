import { apiFetch } from '../apiFetch';
import { Film } from '../../types/models/films';
import { GET_MOVIES_BY_GENRE, GET_MOVIES_BY_ID } from '../endpoints';
import {
  moviesByGenresFromAPIMapper,
  movieByIdFromAPIMapper,
} from '../mappers/filmServiceMappers';
import { FilmByGenreDTO, FilmByIdDTO } from '../../types/DTO/films';

interface FetchFilmsByGenreProps {
  genreId: number;
  lang?: string;
}

interface FetchFilmsByIdProps {
  id: number;
  lang?: string;
}

export const fetchFilmsByGenre = async ({
  genreId,
  lang = 'en-US',
}: FetchFilmsByGenreProps): Promise<Film[]> => {
  const options = {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_TOKEN}`,
    },
  };

  const url = `${GET_MOVIES_BY_GENRE}?language=${lang}&with_genres=${genreId}`;
  const results = await apiFetch<FilmByGenreDTO[]>(url, options);

  const mappedResults = results?.map((result: FilmByGenreDTO) =>
    moviesByGenresFromAPIMapper(result)
  );

  return mappedResults;
};

export const fetchFilmByID = async ({
  id,
  lang = 'en-US',
}: FetchFilmsByIdProps): Promise<Omit<Film, 'imgUrl'>> => {
  const options = {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_TOKEN}`,
    },
  };
  const url = `${GET_MOVIES_BY_ID}/${id}?language=${lang}`;
  const result = await apiFetch<FilmByIdDTO>(url, options);

  const mappedResult = movieByIdFromAPIMapper(result);
  return mappedResult;
};
