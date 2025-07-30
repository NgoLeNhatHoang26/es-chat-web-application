import { Avatar, Box, Button, Container, IconButton, Fade, TextField, Typography } from "@mui/material";
import React, { useEffect,useRef, useState, useCallback } from "react";
import axios from "axios";
import MessageList from "./MessageList";
import InputBar from "./InputBox";
import ChatHeader from "./ChatHeader";
import { useChat } from "../context/ChatContext";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export default function MesageWindow() {
    const {messages, setMessages, currentChatWith} = useChat()
    // Lấy dữ liệu từ json-server có người nhận là userId được truyền vào
    useEffect(() => {
        if (!currentChatWith) return; 
        axios.get("http://localhost:3001/messages", {
            params: {
                senderId: "userId_1",
                reciverId: currentChatWith
            }
        })
            .then(res =>setMessages(res.data))
            .catch(err => console.error(err))
    }, [currentChatWith]);

    // Gửi tinh nhắn vừa nhập và cập nhật lại giao diện hiển thị tin nhắn ngay sau khi gửi
    const handleSendingMessage = useCallback((text) =>{
        const sendTime = new Date(Date.now()).toLocaleString("vi-VN", {
            hour:"2-digit",
            minute:"2-digit",
        })
        const newMessage = {
            text: text,
            senderId : "userId_1",
            reciverId: currentChatWith,
            timeStamp : sendTime
        }
        axios.post("http://localhost:3001/messages", newMessage)
            .then(res => setMessages(prev => [...prev,res.data]))
            .catch(err => console.error(err))
    },[currentChatWith,setMessages])
    
    const scrollRef = useRef(null);
    const [showScrollBtn, setShowScrollBtn] = useState(false);


    // Handle scroll to bottom
    const scrollToBottom = () => {
        scrollRef.current?.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
        });
    };

    // Show button only if not already scrolled to bottom
    const handleScroll = () => {
        const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
        const isAtBottom = scrollHeight - scrollTop <= clientHeight + 20;
        setShowScrollBtn(!isAtBottom);
    };

    // Scroll to bottom on mount
    useEffect(() => {
        scrollToBottom();
    }, [messages]);
    
    return(
        <Box
            display={"flex"}
            flexDirection={"column"}
            gap={0.5}
            height={'100vh'}
            width={"100%"}
        >
    
            <ChatHeader /> 

            <Box 
                display={"flex"}
                flexDirection={"column"}
                gap={1}
                py={1}
                ref={scrollRef}
                onScroll={handleScroll}
                bgcolor={"#E8DCD1"}
                border={'1px solid'}
                flex={1}
                sx={{

                    overflowY: 'scroll',
                    '&::-webkit-scrollbar': {
                    width: '8px',
                    },
                    '&::-webkit-scrollbar-track': {
                        background: '#dcdcdc',
                        borderRadius: '4px',
                        },
                        '&::-webkit-scrollbar-thumb': {
                        backgroundColor: '#555',
                        maxLines: 2,
                        borderRadius: '8px',
                        },
                        '&::-webkit-scrollbar-thumb:hover': {
                        backgroundColor: '#333',
                        },
                    }}
            >
                <MessageList messages={messages} />
                
                <Fade in={showScrollBtn}> 
                        <IconButton
                        onClick={scrollToBottom}
                        sx={{
                            position:'absolute',
                            bottom:'10vh',
                            right: '35vw',
                        }}
                        >
                        <ArrowDownwardIcon />
                        </IconButton>
                </Fade>
            </Box>

            <Box
                width={'100%'}    
            >
                <InputBar onSend={handleSendingMessage}/> 
            </Box>
        </Box>
    );
}
