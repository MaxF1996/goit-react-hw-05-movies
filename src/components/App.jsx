import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from '../pages/Home';
import Movies from '../pages/Movies';
import Movie from '../pages/Movie';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<Movie />} />
        </Route>
      </Routes>
    </div>
  );
};