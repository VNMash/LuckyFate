import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import Header from './components/Header';
import Logo from './components/Logo';
import Footer from './components/Footer';
import Home from './pages/Home';
import Winners from './pages/Winners';
import MyTickets from './pages/MyTickets';
import Profile from './pages/Profile';
import Cars from './pages/categories/Cars';
import Auth from './pages/Auth';

function App() {
  return (
    <UserProvider>
      <Router>
        <Logo />
        <div 
          className="min-h-screen relative"
          style={{
            backgroundImage: "url('https://cdn.pixabay.com/photo/2021/11/05/19/01/cappadocia-6771879_640.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/winners" element={<Winners />} />
            <Route path="/my-tickets" element={<MyTickets />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/cars" element={<Cars />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;