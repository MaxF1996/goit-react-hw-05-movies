import { lazy, Suspense } from 'react';
import Loader from 'components/Loader/Loader';

const MoviesTrending = lazy(() => import('../components/MoviesTrending/MoviesTrending'));

// import MoviesTrending from '../components/MoviesTrending/MoviesTrending';

const Home = () => {
  return (
    <Suspense fallback={<Loader />}>
      <MoviesTrending />
    </Suspense>
  );
};

export default Home;
