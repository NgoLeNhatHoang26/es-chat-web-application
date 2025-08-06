import { Avatar, Box, Button, IconButton } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from '@mui/icons-material/Menu';
import ChatIcon from '@mui/icons-material/Chat';
import SettingButton from "./Buttons/SettingButton";
import { useChat } from "../context/ChatContext";
import { useNavigate } from "react-router-dom";

export default function SideBarButtons ({onSendCB}) {
    const navigate = useNavigate();
    const handleUserProfile = () => {
        navigate("/userprofile")
    }
    const handleHideChatBox = () => {
        if ( typeof onSendCB === "function") 
            onSendCB();
    }

    const {currentUser, setCurrentChatWith} = useChat();
    return (
        <Box
            height={"100vh"}
            width={"4vw"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={'start'}
            bgcolor={"#A1887F"}
            border={"2px solid"}
            py={3}
            gap={3}
        >
            <Button onClick={handleUserProfile}
                sx={{
                    width: 'fit-content',
                }}
            >
                <Avatar src={currentUser.avatar} alt={currentUser.name} si/>
            </Button>
            <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={'center'}
                width= "100%"
                height= "4vw"
                gap={2}
            >
                <IconButton
                    onClick={ handleHideChatBox}
                    sx={{
                        width: '3vw',
                        height: '3vw',
                    }}
                >
                    <MenuIcon sx={{ width: '2vw',height: '2vw'}}/>
                </IconButton>
                <IconButton
                    onClick={() => setCurrentChatWith({id: 0})}
                    sx={{
                        width: '3vw',
                        height: '3vw',
                    }}
                >
                    <ChatIcon sx={{ width: '2vw',height: '2vw'}}/>
                </IconButton>
                < SettingButton />
            </Box>
        </Box>
    );
}