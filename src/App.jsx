import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Libraries from './pages/Libraries';
import AboutMe from './pages/AboutMe';
import SocialMedia from './pages/SocialMedia';

function App() {
  return (
    <Router>
      <div className="w-full min-h-screen bg-gradient-to-b from-primary to-dark text-white overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/libraries" element={<Libraries />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/social-media" element={<SocialMedia />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
