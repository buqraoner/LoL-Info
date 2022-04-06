import './App.css';
import React from 'react';
import { Route, Link, Routes } from "react-router-dom"
import Home from './pages/Home';
import Istatistic from './pages/Istatistic';
import StatusPage from './pages/StatusPage';


function App() {

  return (
    <Routes>
      <Route path="/status" element={<StatusPage />} />
      <Route path="/" element={<Home />} />
      <Route path="/statistics" element={<Istatistic />} />

    </Routes>
  );
}

export default App;
