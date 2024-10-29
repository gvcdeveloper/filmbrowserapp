import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { fetchFilmByIDAction } from '../../redux/slices/filmDetailSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Image from '../../components/Carousel/Image';
import './filmDetailPage.scss';

const FilmDetailPage = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const { data } = useSelector((state: RootState) => state.filmDetail);
  const [loading, setLoading] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    if (id) {
      const fetchFilmDetails = async () => {
        await dispatch(fetchFilmByIDAction(parseInt(id)));
      };
      fetchFilmDetails();
    }
  }, [dispatch, id]);

  const handleWishlistToggle = useCallback(() => {
    setIsWishlisted(!isWishlisted);
  }, [isWishlisted, setIsWishlisted]);

  return (
    <div className="detail-view">
      <Image
        src={data?.posterImgURL || ''}
        alt="Detail"
        className="detail-view-image"
        setLoading={setLoading}
      />
      <div className="detail-view-content">
        <div className="detail-view-header">
          <h2 className="detail-view-title">{data?.title}</h2>
          <button
            className="wishlist-icon"
            onClick={handleWishlistToggle}
            data-testid="wishlist-icon"
          >
            <FontAwesomeIcon
              icon={faHeart}
              size="3x"
              className={`heart-icon ${isWishlisted ? 'active' : ''}`}
            />
          </button>
        </div>
        <h3 className="detail-view-tagline">{data?.tagline}</h3>
        <p className="detail-view-overview">{data?.overview}</p>
      </div>
    </div>
  );
};

export default FilmDetailPage;
