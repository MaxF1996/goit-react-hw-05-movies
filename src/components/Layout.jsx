import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from './Loader/Loader';
import { NavLinkHeader, Container, HeaderApp } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <HeaderApp>
        <Container>
          <nav>
            <ul>
              <li>
                <NavLinkHeader to="/">Home</NavLinkHeader>
              </li>
              <li>
                <NavLinkHeader to="/movies">Movies</NavLinkHeader>
              </li>
            </ul>
          </nav>
        </Container>
      </HeaderApp>
      <main>
        <Container>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
      <footer>
        <Container></Container>
      </footer>
    </>
  );
};

export default Layout;
