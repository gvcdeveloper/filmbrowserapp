import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import logoDark from '../../assets/images/logo/logo-dark.svg';
import Header from './Header';

describe('Header component', () => {
  it('renders correctly with items', () => {
    render(<Header imgLogo={logoDark} width="80px" />);

    const logo = screen.getByAltText('Logo');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', logoDark);
    expect(logo).toHaveAttribute('width', '80px');
  });
});
