import { Box, Button, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import { useChat } from "../../context/ChatContext";
export default function SettingButton() {
    const {currentUser, setCurrentUser } = useChat();
    const [showSetting, setShowSetting] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        if (currentUser.id === 0)
        {
            console.log("Thực hiện đăng xuất")
            navigate("/")
        }
    },[currentUser.id])
    const handleLogout = () => {
        localStorage.removeItem("currentUser")
        setCurrentUser({id: 0})
    }
    return (
        <Box sx={{ position: 'relative', display: 'inline-block' }}>
            <IconButton
                variant="outlinedPrimary"
                onClick={() => setShowSetting(!showSetting)}
                sx={{
                        width: '3vw',
                        height: '3vw',
                }}    
            >
                <SettingsIcon sx={{ width: '2vw',height: '2vw'}} />
            </IconButton>
            {showSetting && 
            <Box
                gap={2}
                sx={{
                    position:'absolute',
                    display: 'flex',
                    flexDirection: 'column',
                    top:'100%',
                    left: 2,
                    zIndex: 100,
                    bgcolor: '#D6C2B5',
                    p:'1vw',
                    border: '1px solid #000000',
                    borderRadius: '8px',
                    width: '12vw',
                    mt:1
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
                        fontSize={'0.8vw'}
                    >

                    Thêm
                    </Box>  
                </Button>
                <Button
                    variant="outlinedPrimary"
                    sx={{
                        borderRadius: '12px',
                        border: '1px solid #000000',
                    }}
                    onClick={handleLogout}
                >
                    <Box
                        display={"flex"}
                        alignItems={"center"}
                        width={"100%"}
                        color={"#000000"}
                        fontWeight={"bold"}
                        gap={1}
                        fontSize={'0.8vw'}
                    >
                    <LogoutIcon width="0.8vw" height="0.8vw"/>
                        Đăng xuất
                    </Box>  
                </Button>  
            </Box>}
        </Box>
    );
}