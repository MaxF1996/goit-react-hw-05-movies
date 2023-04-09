import { lazy, Suspense } from 'react';
import Loader from 'components/Loader/Loader';

const MoviesSearch = lazy(() => import('../components/MoviesSearch/MoviesSearch'));

// import MoviesSearch from '../components/MoviesSearch/MoviesSearch';

const Movies = () => {
  return (
    <Suspense fallback={<Loader />}>
      <MoviesSearch />;
    </Suspense>
  );
};

export default Movies;
