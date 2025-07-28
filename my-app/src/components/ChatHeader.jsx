import { Box, Button, Container, IconButton, Paper, TextField, Typography } from "@mui/material";
import User from './User';
import CallIcon from '@mui/icons-material/Call';
import axios from "axios";
import ButtonMore from "./Buttons/HeaderOptionButton";
import { useEffect, useState } from "react";
export default function ChatHeader({userId}) {
    const [currentChatWith, setCurrentChatWith] = useState(null)
    useEffect(()=> {
        console.log("userId:", userId);
        axios.get("http://localhost:3001/users",

        )
        .then(res => {const foundUser = res.data.find(user => user.id === userId);
      setCurrentChatWith(foundUser)})
        .catch(err => console.error(err))
     },[userId])
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
                <Box display={'flex'} alignItems={'start'} px={2}>
                    {currentChatWith && (
                        <User
                            name={currentChatWith.name}
                            status={"online"}
                        />
                        )}
                </Box>

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