import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from './components/SignUp';

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <main className="content">
          <Routes>
            <Route path="/" element={<SignUp />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
