import React from 'react';
import HomeRouter from '@/presentation/routes/Router';
import { createRoot } from "react-dom/client";

const App: React.FC = () => {
  return (
    <></>
  );
};

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<App />);