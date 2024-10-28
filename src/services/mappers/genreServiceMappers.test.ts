import { describe, it, expect } from 'vitest';
import { genresFromAPIMapper } from './genreServiceMappers';

import { GenreDTO } from '../../types/DTO/genres';

describe('GenresFromAPIMapper functions', () => {
  describe('genresFromAPIMapper function', () => {
    it('should correctly map all fields from a valid genre object', () => {
      const genresFromAPI = [
        {
          id: 32,
          name: 'Horror',
        },
      ];

      const result = genresFromAPIMapper(genresFromAPI);

      expect(result).toEqual({
        Horror: 32,
      });
    });
  });
});
