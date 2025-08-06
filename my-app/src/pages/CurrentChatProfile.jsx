import { Avatar, Box, Button, Container, IconButton, Fade, TextField, Typography } from "@mui/material";
import { useLayoutEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import SideBarButtons from "../components/SidebarFunction";
import UserProfile from "../components/UserProfile";
import { useChat } from "../context/ChatContext";
export default function CurrentChatProfile() {

    const {currentChatWith} = useChat()
    const [goHome,setGoHome] = useState(false)
    const navigate = useNavigate()
    useLayoutEffect(() => {
        if(!goHome){
            setGoHome(true)
        } else {
            navigate("/home")
        }
    },[currentChatWith])

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
                <Box
                    gap={3}
                    sx={{
                        width: "70%",
                        height: "fit-content",
                        display: "flex",
                        flexDirection: "column",
                        alignContent: "center",
                        borderRadius: 5,
                        bgcolor: "#D6C2B5",
                        border: "1px solid",
                        p: 5,
                    }}
                 >
                    <UserProfile userprofile={currentChatWith}/>
                </Box>
            </Box>

            
        </Box>
    );
}