import { Box,Button,IconButton} from "@mui/material";
import User from './User';
import CallIcon from '@mui/icons-material/Call';
import axios from "axios";
import ButtonMore from "./HeaderOptionButton";
import { useEffect, useState } from "react";
import { useChat } from "../context/ChatContext";
import { useNavigate } from "react-router-dom";
export default function ChatHeader() {
    const {currentChatWith} = useChat();
    const [currentUser, setCurrentUser] = useState();
    const navigate = useNavigate()
    useEffect(()=> {
        axios.get("http://localhost:3001/users",
        )
        .then(res => {const foundUser = res.data.find(user => user.id === currentChatWith.id);
      setCurrentUser(foundUser)})
        .catch(err => console.error(err))
     },[currentChatWith])
    const handleShowCurrentProfile = () => {
        console.log(currentChatWith)
        navigate("/chatprofile")
    }
    return (
            <Box
                bgcolor={"#C6B4A3"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={'space-between'}
                border={'1px solid'}
                borderColor={"#000000"}
                py={1}
            >
                <Button
                    onClick={handleShowCurrentProfile}
                >
                    <Box display={'flex'} alignItems={'start'} px={0}>
                        {currentUser && (
                            <User
                                avatar={currentUser.avatar}
                                name={currentUser.name}
                                status={"online"}
                            />
                            )}
                    </Box>
                </Button>

                <Box
                    display={'flex'}
                    alignItems={"end"}
                    paddingX={3}
                    gap={4}
                >   
                    <IconButton>
                        <CallIcon />
                    </IconButton>

                    <ButtonMore />
                </Box>
                
            </Box>
    );
}