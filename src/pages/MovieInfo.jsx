import { lazy, Suspense } from 'react';
import Loader from 'components/Loader/Loader';

const MovieDetails = lazy(() => import('../components/MovieDetails/MovieDetails'));

// import MovieDetails from 'components/MovieDetails/MovieDetails';

const MovieInfo = () => {
  return (
    <Suspense fallback={<Loader />}>
      <MovieDetails />;
    </Suspense>
  );
};

export default MovieInfo;
