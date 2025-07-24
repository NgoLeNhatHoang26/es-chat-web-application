import logo from './logo.svg';
import './App.css';
import React from 'react';
import Login from './pages/Login';
import ChatWindow from './components/Chatwindow';
import User from './components/User';
import ChatHeader from './components/ChatHeader';
import InputBar from './components/Inputbar';
import MessageBoxReceived from './components/MessageBoxReceived';
import MessageBoxSend from './components/MessageBoxSend';
import TrangChu from './pages/TrangChu'
function App() {
    return (
      <div>
        <TrangChu />
      </div>
      
    );
}

export default App;
