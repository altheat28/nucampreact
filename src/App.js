import React from 'react';
import HomePage from './pages/HomePage';
import AboutMe from './pages/AboutMe';
import ContactPage from './pages/ContactPage';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='about' element={<AboutMe />} />
          <Route path='contact' element={<ContactPage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;



