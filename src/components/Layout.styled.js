import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavLinkHeader = styled(NavLink)`
  display: block;
  color: white;
  text-align: center;
  padding: 18px 20px;
  text-decoration: none;

  :hover {
    background-color: white;
    color: blue;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    padding: 0 10px;
  }

  @media (max-width: 480px) {
    padding: 0;
  }
`;

export const HeaderApp = styled.header``;
