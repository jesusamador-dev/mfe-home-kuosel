import React from 'react';
import {BrowserRouter, Routes, Route, Outlet} from 'react-router-dom';
import HomePage from '@/presentation/pages/HomePage/HomePage';

const HomeRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default HomeRouter;
