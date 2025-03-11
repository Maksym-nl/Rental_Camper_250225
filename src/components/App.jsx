import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { lazy, Suspense, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
// import { addCamper } from '../redux/campersSlice';
import { fetchCampers } from '../redux/operation';

import { Loader } from './Loader/Loader';
const Home = lazy(() => import('pages/HomePage'));
const CatalogPage = lazy(() => import('pages/CatalogPage'));
const DetailsPage = lazy(() => import('pages/DetailsPage'));
const Features = lazy(() => import('components/Features/Features'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

export const App = () => {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);
  return (
    <Suspense fallback={<Loader />}>
      {' '}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="campers" element={<CatalogPage />} />
          <Route path="/campers/:id" element={<DetailsPage />}>
            <Route path="features" element={<Features />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
          <Route />
        </Route>
      </Routes>
    </Suspense>
  );
};
