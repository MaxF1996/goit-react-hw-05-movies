import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MoviesTrendingHeader = styled.h1`
  text-align: center;
`;

export const MoviesTrendingList = styled.ul`
  @media screen and (min-width: 480px) and (max-width: 767px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px 10px;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px 10px;
  }

  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px 10px;
  }
`;

export const MoviesTrendingListItem = styled.li`
  color: black;
  border-radius: 10px;
  :hover {
    background-color: blue;
    color: white;
  }
`;

export const MovieTrendLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const MovieTrendPoster = styled.img``;

export const MovieTrendTitle = styled.h3`
  text-align: center;
  color: inherit;
  padding: 0 5px;
`;

export const MovieTrendDate = styled.h4`
  text-align: center;
  color: inherit;
`;
