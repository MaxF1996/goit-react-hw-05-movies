import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import Layout from './Layout';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieInfo = lazy(() => import('../pages/MovieInfo'));
const MovieCast = lazy(() => import('./MovieCast/MovieCast'));
const MovieReviews = lazy(() => import('./MovieReviews/MovieReviews'));

// import Home from 'pages/Home';
// import Movies from 'pages/Movies';
// import MovieInfo from 'pages/MovieInfo';
// import MovieCast from './MovieCast/MovieCast';
// import MovieReviews from './MovieReviews/MovieReviews';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieInfo />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
        </Route>

        <Route path="*" element={<p>Not Found</p>} />
      </Routes>
    </>
  );
};
