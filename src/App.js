import React from 'react';
import Home from './pages/Home';
import UpdateEmployee from './pages/UpdateEmployee';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<UpdateEmployee />} />
      </Routes>
    </BrowserRouter>
  );
}
