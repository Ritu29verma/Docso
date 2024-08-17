import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import HomePage from './Pages/HomePage'
import Signup from './Pages/Signup';
import Doctor from './Pages/Doctor';
import Hospital from './Pages/Hospital';
import './App.css';

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/doctor" element={<Doctor />} />
      <Route path="/hospital" element={<Hospital />} />
      </Routes>
      </BrowserRouter>      
    </div>
  )
}
