import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import Login from './components/login';
import Profile from './components/profile';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Users from './components/Users';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <nav>
            <a href="/">Home</a> | <a href="/about">About</a> | <a href="/contact">Contact</a> | <a href="/users">Users</a> | <a href="/login">Login</a>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/users"
              element={
                <ProtectedRoute>
                  <Users />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;






// BACKUP USERS CARDS

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { AuthProvider } from './AuthContext'; // Importa il provider
// import Login from './components/login';
// import Profile from './components/profile';
// import ProtectedRoute from './components/ProtectedRoute';
// import Home from './components/home';
// import About from './components/about';
// import Contact from './components/contact';
// import Users from './components/Users';
// import 'bootstrap/dist/css/bootstrap.min.css';


// function App() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <a href="/">Home</a> | <a href="/about">About</a> | <a href="/contact">Contact</a> | <a href="/users">Users</a>
//         </nav>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/users" element={<Users />} /> {/* Aggiungi la rotta per Users */}
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;


