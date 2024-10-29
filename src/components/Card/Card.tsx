import { useCallback, useState } from 'react';
import './card.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

interface CardProps {
  imgUrl: string;
  title: string;
  handleOnClick: () => void;
  wishlisted?: boolean;
}

export const Card = ({
  imgUrl,
  title,
  handleOnClick,
  wishlisted = false,
}: CardProps): JSX.Element => {
  const [isWishlisted, setIsWishlisted] = useState(wishlisted);

  const handleWishlistToggle = () => {
    handleOnClick();
    setIsWishlisted(!isWishlisted);
  };

  return (
    <div className="card">
      <div className="card__image-container">
        <img src={imgUrl} alt={title} className="card-image" />
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <button
          className="wishlist-icon"
          onClick={handleWishlistToggle}
          data-testid="wishlist-icon"
        >
          <FontAwesomeIcon
            icon={faHeart}
            className={`heart-icon ${isWishlisted ? 'active' : ''}`}
          />
        </button>
      </div>
    </div>
  );
};

export default Card;
