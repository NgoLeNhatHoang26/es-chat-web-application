import {  Box, Typography } from "@mui/material";
import { useEffect, useCallback, useState } from "react";
import SideBarButtons from "../components/SidebarFunction";
import ChatBox from "../components/ChatBox";
import MesageWindow from "../components/MessageWindow";
import {  useChat } from "../context/ChatContext";
export default function TrangChu() {

    const [showMessageWindow, setShowMessageWindow] = useState(false)
    const {currentChatWith, setCurrentChatWith} = useChat() // Lưu trữ  người dùng đang được chọn
    const [showChatBox, setShowChatBox] = useState(true)
    const handleChangeUser = useCallback((newUser) => {
        setCurrentChatWith(newUser)
    },[setCurrentChatWith])
    // Hiển thị hoặc ẩn ChatBox
    const handleShowChatBox = useCallback(() => {
        setShowChatBox(!showChatBox)
    },[showChatBox])

    useEffect(() => {
    console.log("Current chat with:", currentChatWith);
    setShowMessageWindow(!(currentChatWith.id === 0))
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
                <SideBarButtons onSendCB={handleShowChatBox}/>
                {showChatBox && (
                    <ChatBox onSend={handleChangeUser}/>
                )}
                
            </Box>
            < Box 
                width={'100vw'}
            >   
                {showMessageWindow ? (
                    <MesageWindow />
                ) : (
                    <Box 
                    display={"flex"}
                    alignItems={'center'}
                    justifyContent={'center'}
                    bgcolor={"#E8DCD1"} 
                    border={'1px solid'}
                    height={"100vh"}
                    >     
                        <Typography variant="h5">
                            Chọn một người để bắt đầu cuộc trò chuyện
                        </Typography>
                    </Box>      
            )}
            </Box>
            <Box>

            </Box>
        </Box>
    );
}