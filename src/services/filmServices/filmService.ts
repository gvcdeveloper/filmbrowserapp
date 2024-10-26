import { apiFetch } from '../apiFetch';
import { Film } from '../../types/models/films';
import { GET_MOVIES_BY_GENRE } from '../endpoints';

interface FetchFilmsProps {
  id: number;
  lang?: string;
}

export const fetchFilms = async ({
  id,
  lang = 'en-US',
}: FetchFilmsProps): Promise<Film[]> => {
  const options = {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_TOKEN}`,
    },
  };
  const url = `${GET_MOVIES_BY_GENRE}?language=${lang}&with_genres=${id}`;
  const { results } = await apiFetch(url, options);

  return results?.map((film: any) => ({
    id: film.id,
    title: film.title,
    imgBackdropPath: film.backdrop_path,
  }));
};
