import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import HomePage from './components/Home_Page';
import AboutPage from './components/About_Page';
import ContactUsPage from './components/Contact_Page';
import VetsNearYou from './components/VetsNearYou';
import Login from './components/Login';

// import other pages

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/contact" element={<ContactUsPage/>} />
        <Route path="/vets" element={<VetsNearYou/>} />
        <Route path="/login" element={<Login/>} />
        </Routes>
    </Router>
  );
}
export default App;

