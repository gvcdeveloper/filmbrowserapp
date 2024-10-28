import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import './header.scss';

interface HeaderProps {
  imgLogo: string;
  width: string;
}

const Header = ({ imgLogo, width }: HeaderProps): JSX.Element => {
  return (
    <header className="header">
      <div>
        <img src={imgLogo} alt="Logo" width={width} />
      </div>
      <div className="wishlist">
        <FontAwesomeIcon icon={faHeart} size="lg" />
      </div>
    </header>
  );
};

export default Header;
