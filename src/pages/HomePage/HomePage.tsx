import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Header/Header';
import Carousel from '../../components/Carousel/Carousel';
import { fetchGenresAndFilmsAction } from '../../redux/slices/filmsSlice';
import { AppDispatch } from '../../redux/store';

const HomePage = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const { films, loading, error } = useSelector((state: any) => state.films);

  useEffect(() => {
    const genresNames = ['Horror', 'Animation', 'Drama'];
    dispatch(fetchGenresAndFilmsAction(genresNames));
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <Carousel
        carouselTitle="Horror Movies"
        items={films}
        handleOnClick={() => {}}
      />
    </>
  );
};

export default HomePage;
