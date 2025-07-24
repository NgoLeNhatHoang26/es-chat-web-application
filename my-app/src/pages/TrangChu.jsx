import { Avatar, Box, Button, Container, IconButton, Fade, TextField, Typography } from "@mui/material";
import React from "react";
import { useEffect, useRef, useState } from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ChatHeader from "../components/ChatHeader";
import ChatWindow from "../components/Chatwindow";
import InputBar from "../components/Inputbar";
import MessageBoxReceived from "../components/MessageBoxReceived";
import MessageBoxSend from "../components/MessageBoxSend";
import UserList from "../components/UserList";
export default function TrangChu() {
    const scrollRef = useRef(null);
    const [showScrollBtn, setShowScrollBtn] = useState(false);

    // Simulate messages
    const messages = Array.from({ length: 50 }, (_, i) => i);

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
    }, []);
    return(
        <Box
            display={"flex"}
            justifyContent={"space-between"}
            gap={1}
        >
            <Box
                width={'20vw'}
            >
                <ChatWindow />
            </Box>
            <Box
                display={'flex'}
                flexDirection={"column"}
                justifyContent={"space-between"}
                width={'80vw'}
                height={'100vh'}
                gap={1}
            >
                <Box>
                    <ChatHeader /> 
                </Box>
                <Box 
                    display={"flex"}
                    flexDirection={"column"}
                    gap={1}
                    py={1}
                    pr={1}
                    bgcolor={"#E8DCD1"}
                    border={'1px solid'}
                    ref={scrollRef}
                    onScroll={handleScroll}

                    sx={{
                        flex: '1',
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
                    {[...Array(50)].map((_, i) => {
                        
                            if (i%2 === 0) {
                                return (
                                    <Box alignSelf={"start"} key={i} > <MessageBoxReceived  /> </Box>
                                );
                            } else {
                                return ( 
                                    <Box alignSelf={"end"} key={i}><MessageBoxSend /></Box>
                                );
                            }   
                        
                    })}
                    
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
                <Box> 
                    <InputBar /> 
                </Box>
            </Box>
            
        </Box>
    );
}