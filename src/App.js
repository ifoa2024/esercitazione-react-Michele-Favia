import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import home  from './components/home';
import about from './components/about';
import contact from './components/contact';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Define the Routes */}
        <Routes>
          <Route path="/" element={<home />} />
          <Route path="/about" element={<about />} />
          <Route path="/contact" element={<contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
