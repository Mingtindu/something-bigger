import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/landing/Login'
import Home from './components/Home';
import Navbar from './components/landing/Navbar';
import Register from './components/landing/Register';
import Dashboard from './components/Dashboard';
const App = () => {
  return (
  <Router>
    <Navbar/>
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/dashboard" element={<Dashboard />} />
  </Routes>
</Router>
  )
}

export default App