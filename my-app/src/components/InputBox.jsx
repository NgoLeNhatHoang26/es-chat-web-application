import { Box, IconButton, TextField } from "@mui/material";
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import { useState, useRef } from "react";
import socket from "../socket"; 
import axios from "axios";
import { useChat } from "../context/ChatContext";
export default function InputBar() {
    const {currentChatWith, currentUser, setMessages} = useChat();
    const [text, setText] = useState("");
    const [attach, setAttach] = useState(null);
    const [showAttach, setShowAttach] = useState(false);
    const typingTimeoutRef = useRef(null);
    const conversation = [currentChatWith.id, currentUser.id].sort((a,b) => a - b).join('_')
    const handleAtatchFile = (e) => {
       const file = e.target.files[0];
       if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const image = reader.result;
                setAttach(image);
            }
            reader.readAsDataURL(file)
       }
    }

    const handleTyping = (e) => {
        setText(e.target.value)  

        console.log("User is typing...");
        socket.emit("user-typing", {
            senderId: currentUser.id,
            receiverId: currentChatWith.id
        })
        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }
        typingTimeoutRef.current = setTimeout(() => {
            console.log("User stopped typing");
            socket.emit("user-stop-typing", {
                senderId: currentUser.id,
                receiverId: currentChatWith.id
            });
        }, 1500);        
    }

    const handleSendingMessage = () => {
        const sendTime = new Date(Date.now()).toLocaleString("vi-VN", {
            hour:"2-digit",
            minute:"2-digit",
        })
        let newMessage = {};
        if (text.trim())
        {
        newMessage = {
            type: "text",
            content: text,
            conversationId : conversation,
            senderId : currentUser.id,
            timeStamp : sendTime
        }} else if (attach) {
        newMessage = {
            type: "image",
            content: attach,
            conversationId : conversation,
            senderId : currentUser.id,
            timeStamp : sendTime
        }}
      
        axios.post("http://localhost:3001/messages", newMessage)
            .then(res => setMessages(prev => [...prev,res.data]))
            .catch(err => console.error(err))
        socket.emit("send-message", {
            message: newMessage, 
            receiverId: currentChatWith.id});
        setShowAttach(false);
        setText("");
        setAttach(null);
    }

    return(
            <Box
                display={"flex"}
                alignItems={'center'}
                justifyContent={"space-between"}
                bgcolor={"#C6B4A3"}
                border={'1px solid'}
                borderColor={"#000000"}
                py={1.5}
                px={3}
                gap={4}
            >
                <IconButton
                >
                    <SentimentSatisfiedAltIcon />
                </IconButton>
                <IconButton
                    onClick={() => setShowAttach(!showAttach)}
                >
                    <AttachFileIcon />
                </IconButton>
               
                <TextField placeholder="Nhập tin nhắn..."
                    sx={{
                        width: '90%'
                    }}
                    value={text}
                    onChange={handleTyping}
                />

                <IconButton onClick={handleSendingMessage}>
                    <SendIcon />
                </IconButton>
                {showAttach && (
                <Box
                    position={"absolute"}
                    bottom={'10vh'}
                    left={'20vw'}
                    bgcolor={"#FFFFFF"}
                    p={2}
                >
                    <input
                        type="file"  onChange={handleAtatchFile}
                    />  
                </Box>
                )}
            </Box>
       
    );
}