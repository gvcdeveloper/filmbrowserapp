import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { sliderItemsMock } from '../../__mocks__/sliderItemsMock';
import Carousel from './Carousel';

describe('Carousel component', () => {
  it('renders correctly with items', () => {
    const onClickSpy = vi.fn();
    render(
      <Carousel
        items={sliderItemsMock}
        itemsPerPage={4}
        carouselTitle="Horror movies"
        handleOnClick={onClickSpy}
      />
    );

    expect(screen.getByAltText(sliderItemsMock[0].title)).toBeInTheDocument();
    expect(screen.getByAltText(sliderItemsMock[0].title)).toHaveAttribute(
      'src',
      sliderItemsMock[0].imgUrl
    );
  });

  it('when clicking on next button with 4 elements per page, only those 4 elements per page are shown', async () => {
    const onClickSpy = vi.fn();
    render(
      <Carousel
        items={sliderItemsMock}
        itemsPerPage={4}
        carouselTitle="Horror movies"
        handleOnClick={onClickSpy}
      />
    );

    const nextButton = screen.getByRole('button', { name: /next/i });

    await fireEvent.click(nextButton);
    expect(screen.getByText(sliderItemsMock[3].title)).toHaveClass('invisible');
    expect(screen.getByText(sliderItemsMock[4].title)).toHaveClass('visible');
    expect(screen.getByText(sliderItemsMock[5].title)).toHaveClass('visible');
    expect(screen.getByText(sliderItemsMock[6].title)).toHaveClass('visible');
    expect(screen.getByText(sliderItemsMock[7].title)).toHaveClass('visible');
    expect(screen.getByText(sliderItemsMock[8].title)).toHaveClass('invisible');
  });
  it('navigates to the previous set of images', async () => {
    const onClickSpy = vi.fn();
    render(
      <Carousel
        items={sliderItemsMock}
        itemsPerPage={4}
        carouselTitle="Horror movies"
        handleOnClick={onClickSpy}
      />
    );

    const nextButton = screen.getByRole('button', { name: /next/i });
    const prevButton = screen.getByRole('button', { name: /back/i });

    await fireEvent.click(nextButton);
    await fireEvent.click(nextButton);
    await fireEvent.click(prevButton);

    expect(screen.getByText(sliderItemsMock[3].title)).toHaveClass('invisible');
    expect(screen.getByText(sliderItemsMock[4].title)).toHaveClass('visible');
    expect(screen.getByText(sliderItemsMock[5].title)).toHaveClass('visible');
    expect(screen.getByText(sliderItemsMock[6].title)).toHaveClass('visible');
    expect(screen.getByText(sliderItemsMock[7].title)).toHaveClass('visible');
    expect(screen.getByText(sliderItemsMock[8].title)).toHaveClass('invisible');
  });
});
