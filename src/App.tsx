import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import FilmDetailPage from './pages/FilmDetailPage/FilmDetailPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import WishListPage from './pages/WishListPage/WishListPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:genre/:id" element={<FilmDetailPage />} />
        <Route path="/wishlist" element={<WishListPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
