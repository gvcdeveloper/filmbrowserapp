import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from '../../components/Carousel/Carousel';
import { AppDispatch } from '../../redux/store';
import { fetchGenresAction } from '../../redux/slices/genresSlice';
import { fetchFilmsByGenreAction } from '../../redux/slices/filmsSlice';
import './homePage.scss';

const HomePage = (): JSX.Element => {
  const genres = import.meta.env.VITE_GENRES.split(',');
  const dispatch = useDispatch<AppDispatch>();
  const { data } = useSelector((state: any) => state.genres);
  const {
    data: filmsByGenre,
    loading,
    error,
  } = useSelector((state: any) => state.filmsByGenre);

  useEffect(() => {
    const fetchInitialGenreList = async () => {
      await dispatch(fetchGenresAction());
    };
    fetchInitialGenreList();
  }, [dispatch]);

  useEffect(() => {
    const fetchData = async () => {
      if (data['Horror']) {
        await genres.forEach((genreName: string) => {
          const genre = { name: genreName, id: data[genreName] };
          dispatch(fetchFilmsByGenreAction(genre));
        });
      }
    };
    fetchData();
  }, [dispatch, data]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      {filmsByGenre &&
        genres?.map((genreName: string) => {
          return (
            <div className="film-section">
              <Carousel
                carouselTitle={`${genreName} Movies`}
                items={filmsByGenre[genreName] || []}
                handleOnClick={() => {}}
              />
            </div>
          );
        })}
    </>
  );
};

export default HomePage;
