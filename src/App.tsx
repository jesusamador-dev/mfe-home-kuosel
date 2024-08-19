import React from 'react';
import MainRouter from '@/presentation/routes/router';
import { createRoot } from "react-dom/client";

const App: React.FC = () => {
  return (
    <MainRouter></MainRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<App />);