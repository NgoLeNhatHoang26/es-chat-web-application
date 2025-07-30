import { Box, Button,TextField, Typography } from "@mui/material";
import theme from "../theme";
import React, { useEffect, useState} from "react";
import User from "./User";
import axios from "axios";
import { useChat } from "../context/ChatContext";
function ChatBox({onSend}) {
    const {currentChatWith} = useChat();
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3001/users")
            .then(res => setUsers(res.data))
            .catch(err => console.error(err));
    }, []);
    return (

            <Box
                display={'flex'}
                flexDirection={"column"}
                bgcolor={theme.palette.secondary.main}
                height={'100vh'}
                border={'1px solid'}
                width={'20vw'}
            >
                <Box
                    display={'flex'}
                    alignItems={'center'}
                    width={'100%'}
                    height={'10%'}
                    bgcolor={"#A1887F"}
                    py={3}
                    px={2}
                >
                    <Typography
                        variant="h3"
                        fontWeight={"bold"}
                        fontSize={'3vw'}
                    >Chatbox
                    </Typography>
                </Box>

                <Box
                    display={'flex'}
                    alignItems={'center'}
                    bgcolor={"#C6B4A3"}
                    width={'100%'}
                    p={2}

                >
                    <TextField
                        placeholder="Tìm kiếm người dùng"
                        height={'10%'}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                width:'100%',
                                borderRadius: 4,
                                fontSize: '1.2em',
                                padding:0,
                            },
                        borderRadius: 4,
                        width:'100%'
                        }}
                    />
                </Box>    

                <Box
                    sx={{
                        display:"flex",
                        flexDirection: 'column',
                        height: '80vh', // Chưa tốt
                        width: '100%',
                        overflowY: 'scroll',
                        p: '3px',
                        
                        '&::-webkit-scrollbar': {
                     
                        width: '8px',
                        },
                        '&::-webkit-scrollbar-track': {
                        background: '#dcdcdc',
                        borderRadius: '4px',
                        },
                        '&::-webkit-scrollbar-thumb': {
                        backgroundColor: '#555',
                        maxLines: 2,
                        borderRadius: '8px',
                        },
                        '&::-webkit-scrollbar-thumb:hover': {
                        backgroundColor: '#333',
                        },
                    }}
                >
                    {users.map((user) => (
                        <Button
                        key={user.id}
                        onClick={() => {
                            console.log("Clicked user:", user.id)
                            onSend(user.id)}}
                        sx={{
                            display: 'flex',
                            justifyContent:'start',
                            width:'100%',
                            ...(user.id === currentChatWith)? {
                            bgcolor: "#bda791ff"} :{}
                        }
                         
                        }>
                                <User 
                                    key={user.id}
                                    name={user.name}
                                    avatar={user.avatar}
                                    status={"online"}
                                />
                        </Button>
                    ))}
                </Box>
            </Box>
        
    );
}
export default React.memo(ChatBox)