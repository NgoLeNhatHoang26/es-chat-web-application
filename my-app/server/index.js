const express = require('express');
const http = require('http'); // sử dụng http để tạo server
const { Server } = require('socket.io');
const cors = require('cors');

const app = express(); // tạo backend server
app.use(cors());
app.get("/", (req, res) => {
  res.send("✅ Socket server is running!");
});

const server = http.createServer(app); // tạo http server từ express app
const io = new Server(server, { // khởi tạo socket.io với server
  cors: { 
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});
const onlineUsers = new Map();
// Dùng map để lưu userId <-> socket.id
io.on("connection", (socket) => {

  socket.on("join", (userId) => {
    onlineUsers.set(userId, socket.id);
    console.log(`User ${userId} connected with socket ${socket.id}`);
  });

  socket.on("user-typing", ({ senderId, receiverId }) => {
    console.log(`User ${senderId} is typing to ${receiverId}`);
    const receiverSocketId = onlineUsers.get(receiverId);
    console.log(`🔍 Typing Event: sender=${senderId}, receiver=${receiverId}, receiverSocket=${receiverSocketId}`);
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("user-typing", { senderId, receiverId });
    }
  });

  socket.on("user-stop-typing", ({ senderId, receiverId }) => {
    console.log(`User ${senderId} stopped typing to ${receiverId}`);
    const receiverSocketId = onlineUsers.get(receiverId);
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("user-stop-typing", { senderId, receiverId });
    }
  });

  socket.on("send-message", ({message, receiverId}) => {
    console.log("Message sent:", message);
    const receiverSocketId = onlineUsers.get(receiverId);
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("receive-message", message);
    }
  });
  
  socket.on("disconnect", () => {
    for (const [userId, sockId] of onlineUsers.entries()) {
      if (sockId === socket.id) {
        onlineUsers.delete(userId);
        break;
      }
    }
  });
});

server.listen(3002, () => {
  console.log('Server is running on http://localhost:3002');
});
