import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/landing/Login'
import Home from './components/Home';
import Navbar from './components/landing/Navbar';
const App = () => {
  return (
  <Router>
    <Navbar/>
  <Routes>
    {/* Default route: Render the Login component for "/" */}

    {/* Route for "/": Render other components here as needed */}
    <Route path="/" element={<Home />}/>


    <Route path="/login" element={<Login />} />
  </Routes>
</Router>
  )
}

export default App