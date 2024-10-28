import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { fetchFilmByIDAction } from '../../redux/slices/filmDetailSlice';

const FilmDetailPage = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  //const {data} = useSelector((state: RootState) => state.filmDetail);

  useEffect(() => {
    if (id) {
      // dispatch(fetchFilmByIDAction(id));
    }
  }, [dispatch, id]);

  return <div>{id}</div>;
};

export default FilmDetailPage;
