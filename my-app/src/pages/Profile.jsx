import { Avatar, Box, Button, Container, IconButton, Fade, TextField, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ChatWindow from "../components/Chatwindow";
import SideBarButtons from "../components/SidebarFunction";
import UserProfile from "../components/UserProfile";
export default function Profile() {
    const scrollRef = useRef(null);
    const navigate = useNavigate();
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

    const handleUserProfile = () => {
        navigate("userprofile")
    }

    return(
        <Box
            display={"flex"}
            justifyContent={"space-between"}
            gap={1}
        >   
            <Box 
                display={"flex"}
            >
                <SideBarButtons />
                <ChatWindow />
            </Box>

            <Box
                display={'flex'}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                width={'80vw'}
                height={'100vh'}
                bgcolor={"#E8DCD1"}
                border={"1px solid"}
                gap={1}
                flex={1}
            >
                <UserProfile />
            </Box>

            
        </Box>
    );
}