import { useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import useFetch from 'hooks/useFetch';
import Loader from 'components/Loader/Loader';

import {
  MoviesList,
  MovieItem,
  MovieLink,
  MoviePoster,
  MovieTitleBlock,
  MovieTitle,
} from './Home.styled';
import { MovieSearch, MovieSearchForm, MovieSearchBtn } from './Movies.styled';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams('');
  const location = useLocation();
  let fetchUrl;

  const searchQuery = searchParams.get('query');

  if (searchQuery) {
    fetchUrl = `https://api.themoviedb.org/3/search/movie?api_key=da32420fa9f1589cda3e8b28e89608b4&language=en-US&query=${searchQuery}&page=1&include_adult=false`;
  } else {
    fetchUrl = null;
  }

  const imgBaseUrl = 'https://image.tmdb.org/t/p/w500';

  const { isLoading, apiData, serverError } = useFetch(fetchUrl);

  const handleSubmit = event => {
    event.preventDefault();
    setSearchParams({ query });
    setQuery('');
  };

  const onChange = event => {
    setQuery(event.target.value);
  };

  return (
    <>
      <h1>Welcome in Movies Search Page of this App</h1>
      <p>You can search movies here. Use input field:</p>
      <MovieSearchForm onSubmit={handleSubmit}>
        <MovieSearch type="text" value={query} onChange={onChange} />
        <MovieSearchBtn type="submit">Search</MovieSearchBtn>
      </MovieSearchForm>
      {apiData && apiData.results.length > 0 ? (
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
      ) : isLoading ? (
        <Loader />
      ) : apiData && !apiData.results.length > 0 ? (
        <p>Not found anything</p>
      ) : (
        console.log('fresh start')
      )}
    </>
  );
};

export default Movies;
