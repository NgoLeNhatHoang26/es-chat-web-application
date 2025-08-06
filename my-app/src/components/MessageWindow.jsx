import { Box, IconButton, Fade} from "@mui/material";
import { useEffect,useRef, useState, useCallback, use } from "react";
import axios from "axios";
import MessageList from "./MessageList";
import InputBar from "./InputBox";
import ChatHeader from "./ChatHeader";
import { useChat } from "../context/ChatContext";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import socket from "../socket";
export default function MesageWindow() {
    const {messages, setMessages, currentChatWith, currentUser} = useChat()
    const conversation = [currentChatWith.id, currentUser.id].sort((a,b) => a - b).join('_')
    // Lấy dữ liệu từ json-server có người nhận là userId được truyền vào
    useEffect(() => {
        if (!currentChatWith) return; 
        axios.get("http://localhost:3001/messages", {
            params: {
                conversationId : conversation
            }
        })
            .then(res =>setMessages(res.data))
            .catch(err => console.error(err))
    }, [currentChatWith]);
    useEffect(() => {
        socket.on("receive-message", (message) => {
            console.log("Received message:", message);
            setMessages(prev => [...prev, message]);
        });
        return () => {
            socket.off("receive-message");
        };
    }, [socket, currentChatWith]);
    const scrollRef = useRef(null);
    const [showScrollBtn, setShowScrollBtn] = useState(false);
    
    const scrollToBottom = () => {
        scrollRef.current?.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
        });
    };

    const handleScroll = () => {
        const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
        const isAtBottom = scrollHeight - scrollTop <= clientHeight + 20;
        setShowScrollBtn(!isAtBottom);
    };

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
                p={2}
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
                <InputBar /> 
            </Box>
        </Box>
    );
}
