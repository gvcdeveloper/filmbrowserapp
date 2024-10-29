import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from '../../components/Carousel/Carousel';
import { AppDispatch } from '../../redux/store';
import { RootState } from '../../redux/store';
import { fetchGenresAction } from '../../redux/slices/genresSlice';
import { fetchFilmsByGenreAction } from '../../redux/slices/filmsByGenreSlice';
import { useNavigate } from 'react-router-dom';
import './homePage.scss';

const HomePage = (): JSX.Element => {
  const navigate = useNavigate();
  const genres = import.meta.env.VITE_GENRES.split(',');
  const dispatch = useDispatch<AppDispatch>();
  const { data } = useSelector((state: RootState) => state.genres);
  const {
    data: filmsByGenre,
    loading,
    error,
  } = useSelector((state: RootState) => state.filmsByGenre);

  const handleGoToDetails = (id: number) => {
    navigate(`/details/${id}`);
  };

  useEffect(() => {
    const controller = new AbortController();

    const fetchInitialGenreList = async () => {
      try {
        await dispatch(fetchGenresAction());
      } catch (e) {
        if (e instanceof Error && e.name === 'AbortError') {
          console.log('Fetch aborted');
        }
      }
    };

    fetchInitialGenreList();

    return () => {
      controller.abort();
    };
  }, [dispatch]);

  useEffect(() => {
    const fetchData = async () => {
      //TODO: change
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
        genres?.map((genreName: string, index: number) => {
          return (
            <div className="film-section" key={`${genreName}-${index}`}>
              <Carousel
                carouselTitle={`${genreName} Movies`}
                items={filmsByGenre[genreName] || []}
                handleOnClick={handleGoToDetails}
              />
            </div>
          );
        })}
    </>
  );
};

export default HomePage;
