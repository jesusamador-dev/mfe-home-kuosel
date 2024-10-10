import React from 'react';
import {Routes, Route, Outlet} from 'react-router-dom';
import HomePage from '@/presentation/pages/HomePage/HomePage';
import HomeLayout from 'mfe_ux_kuosel/layouts/HomeLayout';

const HomeRouter: React.FC = () => {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route path='/' element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default HomeRouter;
