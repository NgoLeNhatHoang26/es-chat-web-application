import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import TrangChu from './pages/TrangChu'
import Signin from './pages/Signin';

import Profile from './pages/Profile';
function App() {
    return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<TrangChu />} />
          <Route path="/userprofile" element={<Profile />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </BrowserRouter>

    </div>
    );
}

export default App;
