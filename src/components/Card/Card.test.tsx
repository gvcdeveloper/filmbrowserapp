import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Card from './Card';

describe('Card Component', () => {
  const filmMockProps = {
    imgUrl: 'https://image.tmdb.org/t/p/w500/3V4kLQg0kSqPLctI5ziYWabAZYF.jpg',
    title: 'Venom',
    isInWishlist: false,
    onWishlistToggle: vi.fn(),
  };

  it('renders correctly with image, title, and wishlist icon', () => {
    render(<Card {...filmMockProps} />);

    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', filmMockProps.imgUrl);
    expect(image).toHaveAttribute('alt', filmMockProps.title);

    const title = screen.getByText(filmMockProps.title);
    expect(title).toBeInTheDocument();

    const wishlistIcon = screen.getByTestId('wishlist-icon');
    expect(wishlistIcon).toBeInTheDocument();
  });
});
