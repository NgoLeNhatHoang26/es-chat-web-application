import { Avatar, Box, Button, Container, IconButton, Fade, TextField, Typography } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import LogoutIcon from '@mui/icons-material/Logout';
import { useChat } from "../context/ChatContext";
export default function ButtonMore() {
    const [showOptions, setShowOptions] = useState(false);
    const {currentChatWith, setCurrentChatWith} = useChat()
    return (
        <Box
            bgcolor={"#CBB9A8"}
        >

            <IconButton
                variant="outlinedPrimary"
                onClick={() => setShowOptions(!showOptions)}
            >
                <MoreVertIcon />
            </IconButton>
            {showOptions && 
            <Box
                sx={{
                    position:'absolute',
                    top:'7vh',
                    right: 15,
                    zIndex: 2000,
            }}
            > 
                    <Box
                    gap={3}
                    sx={{
                        width: "100%",
                        height: "fit-content",
                        display: "flex",
                        flexDirection: "column",
                        alignContent: "center",
                        borderRadius: 5,
                        bgcolor: "#D6C2B5",
                        border: "1px solid",
                        p: 3
                    }}
                >
                    <Button
                        variant="outlinedPrimary"
                        sx={{
                            borderRadius: '12px',
                            border: '1px solid #000000'
                        }}
                    >
                        <Box
                            display={"flex"}
                            alignItems={"center"}
                            width={"100%"}
                            color={"#000000"}
                            fontWeight={"bold"}
                            gap={1}
                        >
                        <SearchIcon />
                        Tìm kiếm tin nhắn
                        </Box>
                    </Button>
                    <Button 
                        variant="outlinedPrimary"
                        sx={{
                            borderRadius: '12px',
                            border: '1px solid #000000'
                        }}
                    >
                        <Box
                            display={"flex"}
                            alignItems={"center"}
                            width={"100%"}
                            color={"#000000"}
                            fontWeight={"bold"}
                            gap={1}
                        >
                        <InsertDriveFileIcon />
                        File phương tiện
                        </Box>
                    </Button>       
                    <Button
                        onClick={() => setCurrentChatWith(null)}
                        variant="outlinedPrimary"
                        sx={{
                            borderRadius: '12px',
                            border: '1px solid #000000'
                        }}
                    >
                        <Box
                            display={"flex"}
                            alignItems={"center"}
                            color={"#000000"}
                            fontWeight={"bold"}
                            gap={1}
                        >
                        <LogoutIcon />
                        Rời khỏi cuộc trò chuyện
                        </Box>
                    </Button>              
                </Box>
            </Box>}
        </Box>
    );
}