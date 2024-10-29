import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import './header.scss';

interface HeaderProps {
  imgLogo: string;
  width: string;
}

const Header = ({ imgLogo, width }: HeaderProps): JSX.Element => {
  const navigate = useNavigate();

  const handleGoToWishList = () => {
    navigate('/wishlist');
  };

  const handleGoToHome = () => {
    navigate('/');
  };

  return (
    <header className="header">
      <div onClick={handleGoToHome} className="logo-wrapper">
        <img src={imgLogo} alt="Logo" width={width} />
      </div>
      <div className="wishlist">
        <FontAwesomeIcon
          icon={faHeart}
          size="lg"
          onClick={handleGoToWishList}
        />
      </div>
    </header>
  );
};

export default Header;
