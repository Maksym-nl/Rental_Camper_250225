import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import CatalogPage from '../pages/CatalogPage';
import DetailsPage from '../pages/DetailsPage';
import Home from 'pages/HomePage';
import { Features } from './Features/Features';
import { Reviews } from './Reviews/Reviews';
export const App = () => {
  return (
    <Routes>
      {/* Layout будет виден на всех вложенных маршрутах */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="campers" element={<CatalogPage />} />
        <Route path="/campers/:id" element={<DetailsPage />}>
          <Route path="features" element={<Features />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>

        <Route />
      </Route>
    </Routes>
  );
};
