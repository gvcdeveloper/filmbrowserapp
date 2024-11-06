import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from '../../components/Carousel/Carousel';
import { AppDispatch } from '../../redux/store';
import { RootState } from '../../redux/store';
import { fetchGenresAction } from '../../redux/slices/genresSlice';
import { fetchFilmsByGenreAction } from '../../redux/slices/filmsByGenreSlice';
import { useNavigate } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import './homePage.scss';

const HomePage = (): JSX.Element => {
  const genres = import.meta.env.VITE_GENRES.split(',');
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const { data: genresData, loading: genresLoading } = useSelector(
    (state: RootState) => state.genres
  );
  const {
    data: filmsByGenre,
    loading: filmsByGenereLoading,
    error,
  } = useSelector((state: RootState) => state.filmsByGenre);

  const handleGoToDetails = useCallback(
    (genre: string) => (id: number) => {
      navigate(`/details/${genre.toLowerCase()}/${id}`);
    },
    [navigate]
  );

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
      if (Object.keys(genresData).length > 0) {
        await genres.forEach((genreName: string) => {
          const genre = { name: genreName, id: genresData[genreName] };
          dispatch(fetchFilmsByGenreAction(genre));
        });
      }
    };
    fetchData();
  }, [dispatch, genresData]);

  if (error) return <div>Error: {error}</div>;

  return (
    <>
      {(genresLoading || filmsByGenereLoading) && <Loader />}
      {genresData &&
        filmsByGenre &&
        genres?.map((genreName: string, index: number) => {
          return (
            <div className="film-section" key={`${genreName}-${index}`}>
              <Carousel
                carouselTitle={`${genreName} Movies`}
                items={filmsByGenre[genreName] || []}
                handleOnClick={handleGoToDetails(genreName)}
              />
            </div>
          );
        })}
    </>
  );
};

export default HomePage;
