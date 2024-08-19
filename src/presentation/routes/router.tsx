import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '@/presentation/pages/HomePage/HomePage';

const MainRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/kuosel/home/v1/" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default MainRouter;
