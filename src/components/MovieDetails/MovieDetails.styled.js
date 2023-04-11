import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const MovieBackBtn = styled(Link)`
  text-decoration: none;
  font-weight: 700;
  font-size: 18px;
  color: white;
  background-color: blue;
  opacity: 50%;

  border: 2px solid blue;
  border-radius: 5px;
  padding: 5px;
  display: block;
  max-width: fit-content;

  position: fixed;
  top: 105px;
  left: calc(75%);

  :hover {
    color: blue;
    background-color: white;
  }
`;

export const MovieSection = styled.section`
  @media screen and (min-width: 700px) {
    display: flex;
    justify-content: center;
    gap: 40px;
  }
`;

export const MoviePoster = styled.img`
  max-width: 350px;
  margin: 0 auto;
`;

export const MovieInfo = styled.div``;

export const MovieTitle = styled.h1``;

export const MovieScore = styled.p``;

export const MovieDescription = styled.p``;

export const MovieHeader = styled.h3``;

export const MovieAdditionalInfo = styled.section``;

export const MovieAddLink = styled(NavLink)`
  display: block;
  max-width: fit-content;
`;
