import { useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import useFetchMovies from '../../hooks/useFetchMovies';
import Loader from 'components/Loader/Loader';

import {
  MoviesSearchTitle,
  MoviesSearchLink,
  MoviesSearchInput,
  MoviesSearchForm,
  MoviesSearchBtn,
  MoviesSearchList,
  MoviesSearchListItem,
  MoviesSearchPoster,
  MoviesSearchName,
  MoviesSearchFailed,
  MoviesSearchDate,
} from './MoviesSearch.styled';

const MoviesSearch = () => {
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams('');

  const searchQuery = searchParams.get('query');

  const { data, loading, baseImgUrl } = useFetchMovies('search', searchQuery ? searchQuery : '');

  const location = useLocation();

  const handleSubmit = event => {
    event.preventDefault();
    if (query) {
      setSearchParams({ query });
      setQuery('');
    }
  };

  const onChange = event => {
    setQuery(event.target.value);
  };

  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  return (
    <>
      <MoviesSearchTitle>You can search movie here.</MoviesSearchTitle>
      <MoviesSearchForm onSubmit={handleSubmit}>
        <MoviesSearchInput
          type="text"
          value={query}
          onChange={onChange}
          placeholder="Write your query here!"
        />
        <MoviesSearchBtn type="submit">Search</MoviesSearchBtn>
      </MoviesSearchForm>
      {loading && <Loader />}
      {loading || !data || data.results.length > 0 || (
        <MoviesSearchFailed>Nothing was Found!</MoviesSearchFailed>
      )}
      {!loading && data && data.results && data.results.length > 0 && (
        <MoviesSearchList>
          {data.results.map(movie => (
            <MoviesSearchListItem key={`${movie.id}`}>
              <MoviesSearchLink to={`${movie.id}`} state={{ from: location }}>
                <MoviesSearchPoster
                  src={
                    movie.poster_path
                      ? `${baseImgUrl}${movie.poster_path}`
                      : `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg`
                  }
                  alt={movie.title}
                />
                <MoviesSearchName>{movie.title}</MoviesSearchName>
                <MoviesSearchDate>{formatDate(movie.release_date)}</MoviesSearchDate>
              </MoviesSearchLink>
            </MoviesSearchListItem>
          ))}
        </MoviesSearchList>
      )}
    </>
  );
};

export default MoviesSearch;
