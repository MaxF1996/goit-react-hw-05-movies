import { NavLink, Outlet } from 'react-router-dom';
import { NavList } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <NavList>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/movies">Movies</NavLink>
            </li>
          </NavList>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
