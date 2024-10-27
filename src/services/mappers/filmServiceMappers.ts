import { FilmByGenreDTO, FilmByIdDTO } from '../../types/DTO/films';

export const moviesByGenresFromAPIMapper = (movieObject: FilmByGenreDTO) => {
  return {
    pathURL: movieObject.backdrop_path,
    title: movieObject.title,
    id: movieObject.id,
  };
};

export const movieByIdFromAPIMapper = (movieObject: FilmByIdDTO) => {
  return {
    id: movieObject.id,
    title: movieObject.title,
    adult: movieObject.adult,
    overview: movieObject.overview,
    posterImgURL: movieObject.poster_path,
  };
};
