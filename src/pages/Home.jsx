// import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Loader from 'components/Loader/Loader';

import {
  MoviesList,
  MovieItem,
  MovieLink,
  MoviePoster,
  MovieTitleBlock,
  MovieTitle,
} from './Home.styled';

const Home = () => {
  const fetchUrl =
    'https://api.themoviedb.org/3/trending/movie/week?api_key=da32420fa9f1589cda3e8b28e89608b4';
  const imgBaseUrl = 'https://image.tmdb.org/t/p/w500';
  const { isLoading, apiData, serverError } = useFetch(fetchUrl);
  // console.log(isLoading);
  const location = useLocation();

  return (
    <>
      <h1>Welcome in Movies App</h1>
      <p>
        You can see the most hyped movies on this page. For searching go on
        Movies page.
      </p>
      {isLoading || apiData === null ? (
        <Loader />
      ) : !isLoading && serverError ? (
        <p>Error in fetching data...</p>
      ) : (
        // <p>{JSON.stringify(apiData)}</p>
        <MoviesList>
          {apiData.results.map(movie => (
            <MovieItem key={movie.id}>
              <MovieLink to={`/movies/${movie.id}`} state={{ from: location }}>
                <MoviePoster
                  src={`${imgBaseUrl}${movie.poster_path}`}
                  alt={movie.title}
                />
                <MovieTitleBlock>
                  <MovieTitle>{movie.title}</MovieTitle>
                </MovieTitleBlock>
              </MovieLink>
            </MovieItem>
          ))}
        </MoviesList>
      )}
    </>
  );
};

export default Home;
