import Card from '../../components/Card/Card';

import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { removeFromWishlist } from '../../redux/slices/wishlistSlice';
import { useCallback } from 'react';
import './wishListPage.scss';
import EmptyList from '../../components/EmptyList/EmptyList';

const WishListPage = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const { data } = useSelector((state: RootState) => state.wishlist);

  const handleRemoveFromWishList = useCallback(
    (item: any) => {
      if (item) {
        dispatch(removeFromWishlist(item));
      }
    },
    [dispatch, removeFromWishlist]
  );

  return (
    <div className="wishlist-page">
      {data?.map((card: any, index: number) => (
        <div className="card-wrapper" key={`${card.id}-${index}`}>
          <Card
            imgUrl={card.imgUrl}
            title={card.title}
            wishlisted={true}
            handleOnClick={() => handleRemoveFromWishList(card)}
          />
        </div>
      ))}
      {data.length === 0 && (
        <EmptyList message="There is no film in your wish list" />
      )}
    </div>
  );
};

export default WishListPage;
