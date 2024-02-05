import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from './scenes/pages/Landing/LandingPage';
import VirtuesPage from './scenes/pages/Virtues/VirtuesPage';

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <main className="content">
          <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/virtues" element={<VirtuesPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
