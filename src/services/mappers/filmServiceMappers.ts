import { FilmByGenreDTO, FilmByIdDTO } from '../../types/DTO/films';

const generateImgURL = (backdropPath: string) =>
  `${import.meta.env.VITE_IMG_URL_BASE}/w500${backdropPath}`;

export const moviesByGenresFromAPIMapper = (movieObject: FilmByGenreDTO) => {
  return {
    imgUrl: generateImgURL(movieObject.backdrop_path),
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
    posterImgURL: generateImgURL(movieObject.poster_path),
    imgUrl: generateImgURL(movieObject.backdrop_path),
    tagline: movieObject.tagline,
  };
};
