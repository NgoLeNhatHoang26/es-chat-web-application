import { Avatar, Box, Button, Container, IconButton, Paper, TextField, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from '@mui/icons-material/Menu';
import ChatIcon from '@mui/icons-material/Chat';
import SettingButton from "./Buttons/SettingButton";
import { useNavigate } from "react-router-dom";
export default function SideBarButtons () {
    const navigate = useNavigate();
    const handleUserProfile = () => {
        navigate("/userprofile")
    }
    const handleHome = () => {
        navigate("/home")
    }
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
            <Button onClick={handleUserProfile}>
                <Avatar
                    sx={{
                        width: '3vw',
                        height: '3vw',
                        border: '1px solid #000000'
                    }}
                >
                    <PersonIcon  sx={{ width: '2vw',height: '2vw'}}/>
                </Avatar>
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
                    sx={{
                        width: '3vw',
                        height: '3vw',
                    }}
                >
                    <MenuIcon sx={{ width: '2vw',height: '2vw'}}/>
                </IconButton>
                <IconButton
                    onClick={handleHome}
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