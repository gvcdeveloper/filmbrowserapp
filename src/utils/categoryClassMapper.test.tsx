import { describe, it, expect } from 'vitest';
import { categoryClassMapper } from './categoryClassMapper';

describe('categoryClassMapper function', () => {
  it('renders correctly with image, title, and wishlist icon', () => {
    const genres = ['Horror', 'Family'];

    const result = categoryClassMapper('filmDetail', genres);

    expect(result).toEqual({
      horror: 'filmDetail--horror',
      family: 'filmDetail--family',
    });
  });
});
