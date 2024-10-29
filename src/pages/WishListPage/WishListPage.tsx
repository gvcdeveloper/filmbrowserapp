import Card from '../../components/Card/Card';
import { sliderItemsMock } from '../../__mocks__/sliderItemsMock';
import './wishListPage.scss';

const WishListPage = (): JSX.Element => {
  return (
    <div className="wishlist-page">
      {sliderItemsMock.map((card: any) => (
        <div className="card-wrapper">
          <Card imgUrl={card.imgUrl} title={card.title} />
        </div>
      ))}
    </div>
  );
};

export default WishListPage;
