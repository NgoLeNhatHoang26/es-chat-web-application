
import { useEffect } from 'react';
import socket from './socket';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import TrangChu from './pages/TrangChu'
import Signin from './pages/Signin';
import CurrentChatProfile from './pages/CurrentChatProfile';
import Profile from './pages/Profile';
import ForgotPassword from './pages/ForgotPassword';
import { useChat } from './context/ChatContext';

function App() {
  const {currentUser, setCurrentUser} = useChat();
  useEffect(() => {
  socket.connect();
  if(currentUser.id !== 0 )  {
    socket.emit("join", currentUser.id)
    socket.on("connect", () => {
      console.log("✅ Socket connected: ",  currentUser.id);
  })
  }
  return () => socket.disconnect();
  
  }, [currentUser]);
    return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<TrangChu />} />
          <Route path="/userprofile" element={<Profile />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/chatprofile" element={<CurrentChatProfile />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>

    </div>
    );
}

export default App;
