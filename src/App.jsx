import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import Top10Page from './pages/Top10Page.jsx';
import FlopMoviesPage from './pages/FlopMoviesPage.jsx';
import './index.css';

function App() {
  const handleNavClick = (pageName) => {
    console.log(`${pageName} clicked`);
  };

  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={() => handleNavClick('Home')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/top10"
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={() => handleNavClick('Top 10')}
            >
              Top 10 Movies
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/flop" 
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={() => handleNavClick('Flop')}
            >
              Flop Movies
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/top10" element={<Top10Page />} />
        <Route path="/flop" element={<FlopMoviesPage />} />
      </Routes>
    </div>
  );
}

export default App;