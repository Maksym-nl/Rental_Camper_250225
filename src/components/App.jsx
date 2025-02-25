import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';

import CatalogPage from '../pages/CatalogPage';
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/catalog" element={<CatalogPage />} />
    </Routes>
  );
};
