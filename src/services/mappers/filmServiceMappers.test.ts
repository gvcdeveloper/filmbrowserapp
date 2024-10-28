import { describe, it, expect } from 'vitest';
import {
  movieByIdFromAPIMapper,
  moviesByGenresFromAPIMapper,
} from './filmServiceMappers';
import { FilmByGenreDTO, FilmByIdDTO } from '../../types/DTO/films';

describe('FilmServiceMappers functions', () => {
  describe('movieByIdFromAPIMapper function', () => {
    it('should correctly map all fields from a valid movie object', () => {
      const movieFromAPI: FilmByIdDTO = {
        id: 1,
        title: 'Venom',
        adult: false,
        overview: 'An excellent movie',
        poster_path: '/3V4kLQg0kSqPLctI5ziYWabAZYF.jpg',
      };

      const result = movieByIdFromAPIMapper(movieFromAPI);

      expect(result).toEqual({
        id: 1,
        title: 'Venom',
        adult: false,
        overview: 'An excellent movie',
        posterImgURL: '/3V4kLQg0kSqPLctI5ziYWabAZYF.jpg',
      });
    });
  });
  describe('moviesByGenresFromAPIMapper function', () => {
    it('should correctly map all fields from a valid movie object', () => {
      const movieFromAPI: FilmByGenreDTO = {
        id: 1,
        title: 'Venom',
        backdrop_path: '/3V4kLQg0kSqPLctI5ziYWabAZYF.jpg',
      };

      const result = moviesByGenresFromAPIMapper(movieFromAPI);

      expect(result).toEqual({
        id: 1,
        title: 'Venom',
        imgUrl:
          'https://image.tmdb.org/t/p/w500/3V4kLQg0kSqPLctI5ziYWabAZYF.jpg',
      });
    });
  });
});
