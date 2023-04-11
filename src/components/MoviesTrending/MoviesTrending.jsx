import { useLocation } from 'react-router-dom';
import useFetchMovies from '../../hooks/useFetchMovies';
import Loader from 'components/Loader/Loader';

import {
  MoviesTrendingHeader,
  MoviesTrendingList,
  MoviesTrendingListItem,
  MovieTrendLink,
  MovieTrendPoster,
  MovieTrendTitle,
  MovieTrendDate,
} from './MoviesTrending.styled';

const MoviesTrending = () => {
  const { data, baseImgUrl } = useFetchMovies('trending');
  const location = useLocation();
  // console.log(loading);
  // console.log(data);

  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  return (
    <>
      <MoviesTrendingHeader>Hello! You can see popular movies here.</MoviesTrendingHeader>
      {data ? (
        <MoviesTrendingList>
          {data.results.map(movie => (
            <MoviesTrendingListItem key={`${movie.id}`}>
              <MovieTrendLink to={`/movies/${movie.id}`} state={{ from: location }}>
                <MovieTrendPoster src={`${baseImgUrl}${movie.poster_path}`} alt={movie.title} />
                <MovieTrendTitle>«{movie.title}»</MovieTrendTitle>
                <MovieTrendDate>{formatDate(movie.release_date)}</MovieTrendDate>
              </MovieTrendLink>
            </MoviesTrendingListItem>
          ))}
        </MoviesTrendingList>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default MoviesTrending;
