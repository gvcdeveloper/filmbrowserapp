import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { useCallback, useEffect, useState } from 'react';
import './carousel.scss';

type Slide = {
  title: string;
  imgUrl: string;
  id: number;
};

interface CarouselProps {
  items: Slide[];
  carouselTitle?: string;
  handleOnClick: () => void;
  monoSlider?: boolean;
}

const Carousel = ({
  items,
  carouselTitle,
  handleOnClick,
  monoSlider = false,
}: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  const updateItemsPerPage = useCallback(() => {
    const width = window.innerWidth;

    if (width < 640) {
      setItemsPerPage(1);
    } else if (width < 1024) {
      setItemsPerPage(2);
    } else {
      setItemsPerPage(4);
    }
  }, []);

  useEffect(() => {
    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);

    return () => {
      window.removeEventListener('resize', updateItemsPerPage);
    };
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex(() => (currentIndex + itemsPerPage) % items.length);
  }, [currentIndex, itemsPerPage, items.length]);

  const prevSlide = useCallback(
    () =>
      setCurrentIndex(() =>
        currentIndex < itemsPerPage
          ? items.length - itemsPerPage
          : currentIndex - itemsPerPage
      ),
    [currentIndex, itemsPerPage, items.length]
  );

  return (
    <>
      {carouselTitle && <h2 className="carousel-title">{carouselTitle}</h2>}
      <div className="carousel">
        <div
          className="carousel-items"
          style={{
            transform: `translateX(-${(currentIndex * 100) / itemsPerPage}%)`,
            transition: 'transform 0.3s ease-in-out',
          }}
        >
          {items.map((item: Slide, index: number) => (
            <div
              key={`${index}-${item.id}`}
              className={`carousel-item ${monoSlider ? 'mono-slider' : 'multi-slider'}`}
              onClick={handleOnClick}
            >
              <h4
                className={`carousel-item-title ${index >= currentIndex && index < currentIndex + itemsPerPage ? 'visible' : 'invisible'}`}
              >
                {item.title}
              </h4>
              <img src={item.imgUrl} alt={item.title} loading="lazy" />
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={nextSlide}
          aria-label="next"
          name="next-btn"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
        <button
          type="button"
          onClick={prevSlide}
          aria-label="back"
          name="prev-btn"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
      </div>
    </>
  );
};

export default Carousel;
