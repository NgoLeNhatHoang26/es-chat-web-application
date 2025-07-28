import { Avatar, Box, Button, Container, IconButton, Fade, TextField, Typography } from "@mui/material";
import React from "react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import SideBarButtons from "../components/SidebarFunction";
import ChatBox from "../components/ChatBox";
import MesageWindow from "../components/MessageWindow";
export default function TrangChu() {

    const [currentChatWith,setCurrentChatWith] = useState(null) // Lưu trữ id của người dùng đang được chọn
    const handleChangeUser = (newUserId) =>{
        setCurrentChatWith(newUserId)
    }
    useEffect(() => {
    console.log("Current chat with:", currentChatWith);
    }, [currentChatWith]);
    return(
        <Box
            display={"flex"}
            justifyContent={"space-between"}
            gap={2}
        >   
            <Box 
                display={"flex"}
            >
                <SideBarButtons />
                <ChatBox onSend={handleChangeUser}/>
            </Box>

            < Box 
                width={'100vw'}
            >
                <MesageWindow userId={currentChatWith}/>
            </Box>
        </Box>
    );
}