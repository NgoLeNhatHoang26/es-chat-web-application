import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import ChatWindow from './components/Chatwindow';
import User from './components/User';
import ChatHeader from './components/ChatHeader';
import InputBar from './components/InputBox';
import MessageBoxReceived from './components/MessageBoxReceived';
import MessageBoxSend from './components/MessageBoxSend';
import TrangChu from './pages/TrangChu'
import Signin from './pages/Signin';
import SideBarButtons from './components/SidebarFunction';
import UserProfile from './components/UserProfile';
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
