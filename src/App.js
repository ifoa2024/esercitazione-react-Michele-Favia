import React from 'react'; // Importa React una sola volta
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Login from './components/login';
import Profile from './components/profile';
import ProtectedRoute from './ProtectedRoute';



function App() {
  return (
    <Router>
      <div>
        <nav>
          <a href="/">Home</a> | <a href="/about">About</a> | <a href="/contact">Contact</a>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
