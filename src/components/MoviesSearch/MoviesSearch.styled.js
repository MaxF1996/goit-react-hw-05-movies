import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MoviesSearchTitle = styled.h1`
  text-align: center;
`;

export const MoviesSearchForm = styled.form`
  display: flex;
  justify-content: center;
  column-gap: 12px;
  max-width: fit-content;

  margin: 0 auto 30px;
`;

export const MoviesSearchInput = styled.input`
  border: 1px solid blue;
  border-radius: 5px;
  min-width: 180px;
  padding: 10px;

  @media screen and (min-width: 480px) {
    min-width: 250px;
  }

  @media screen and (min-width: 960px) {
    min-width: 350px;
  }

  ::placeholder {
    color: blue;
    opacity: 85%;
    font-weight: 700;
  }
`;

export const MoviesSearchBtn = styled.button`
  background-color: blue;
  color: white;
  border-color: transparent;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 700;

  :hover {
    background-color: #fff;
    color: blue;
    border-color: blue;
  }
`;

export const MoviesSearchList = styled.ul`
  @media screen and (min-width: 480px) and (max-width: 767px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px 10px;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px 10px;
  }

  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px 10px;
  }
`;

export const MoviesSearchListItem = styled.li`
  color: black;
  border-radius: 10px;
  :hover {
    background-color: blue;
    color: white;
  }
`;

export const MoviesSearchPoster = styled.img`
  /* width: 293px;
  height: 439px; */
`;

export const MoviesSearchName = styled.h3`
  text-align: center;
  color: inherit;
  padding: 0 5px;
`;

export const MoviesSearchDate = styled.h4`
  text-align: center;
  color: inherit;
`;

export const MoviesSearchLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const MoviesSearchFailed = styled.p``;
