import { useState } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import useFetch from 'hooks/useFetch';
import Loader from 'components/Loader/Loader';

import {
  MovieSection,
  MoviePoster,
  MovieInfo,
  MovieTitle,
  MovieScore,
  MovieDescription,
  MovieHeader,
} from './Movie.styled';

const Movies = () => {
  const { movieId } = useParams();

  const fetchUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=da32420fa9f1589cda3e8b28e89608b4&language=en-US`;
  const imgBaseUrl = 'https://image.tmdb.org/t/p/w500';

  const { isLoading, apiData, serverError } = useFetch(fetchUrl);

  //   console.log(apiData);
  //   const [query, setQuery] = useState('');
  //   const [searchParams, setSearchParams] = useSearchParams('');
  //   const location = useLocation();
  //   let fetchUrl;

  //   const searchQuery = searchParams.get('query');
  //api.themoviedb.org/3/movie/{movie_id}?api_key=da32420fa9f1589cda3e8b28e89608b4&language=en-US
  //   if (searchQuery) {
  //     fetchUrl = `https://api.themoviedb.org/3/movie/{movie_id}?api_key=da32420fa9f1589cda3e8b28e89608b4&language=en-US`;
  //   } else {
  //     fetchUrl = null;
  //   }

  //   const { isLoading, apiData, serverError } = useFetch(fetchUrl);

  //   const handleSubmit = event => {
  //     event.preventDefault();
  //     setSearchParams({ query });
  //     setQuery('');
  //   };

  //   const onChange = event => {
  //     setQuery(event.target.value);
  //   };

  return (
    <>
      {isLoading && !apiData && <Loader />}
      {apiData !== null && (
        <MovieSection>
          <MoviePoster
            src={
              apiData.poster_path
                ? `${imgBaseUrl}${apiData.poster_path}`
                : `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg`
            }
            alt={apiData.title}
          />
          <MovieInfo>
            <MovieTitle>{apiData.title}</MovieTitle>
            <MovieScore>
              User Score: {Math.round(apiData.vote_average * 10)}%
            </MovieScore>
            <MovieHeader>Overview</MovieHeader>
            <MovieDescription>{apiData.overview}</MovieDescription>
            <MovieHeader>Genres</MovieHeader>
            <MovieDescription>
              {apiData.genres.map(genre => genre.name).join(', ')}
            </MovieDescription>
          </MovieInfo>
        </MovieSection>
      )}
    </>
  );
};

export default Movies;
