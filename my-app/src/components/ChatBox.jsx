import { Box, Button,Stack,TextField, Typography } from "@mui/material";
import theme from "../theme";
import React, { useEffect, useState} from "react";
import User from "./User";
import Group from "./Group";
import axios from "axios";
import { useChat } from "../context/ChatContext";
function ChatBox({onSend}) {
    const {currentUser, currentChatWith, setCurrentChatWith} = useChat();
    console.log("ChatBox: ", currentUser)
    const [users, setUsers] = useState([]);
    const [query, setQuery] = useState("");
    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(query.toLowerCase()))
        
    useEffect(() => {
        axios.get("http://localhost:3001/users")
            .then(res => setUsers(res.data.filter(user => user.id !== currentUser.id)))
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
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
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
                    {query && (
                        <Box
                            sx={{cursor: 'pointer'}}
                            bgcolor={"#FFFFFF"}
                            border={'1px solid #000000'}
                            position={"absolute"}
                            width={'25vw'}
                            top={'18vh'}
                            left={'5vw'}
                            p={1}
                            zIndex={1}
                        >
                            {
                                filteredUsers.length>0 ?
                                (
                                    <Box 
                                        gap={1}
                                    >
                                        {filteredUsers.map(user => (
                                            <Button
                                                sx={{
                                                    display: 'flex',
                                                    justifyContent:'start',
                                                    width:'100%',
                                                    bgcolor: user.id === (currentChatWith.id || 0) ? "#bda791ff" : "transparent",
                                                    "&:hover": {
                                                        bgcolor: "#bda791ff"
                                                    }      
                                                }}
                                                onClick={() => {
                                                    setCurrentChatWith(user)
                                                    setQuery("")
                                                }}
                                            >
                                                <User
                                                    key={user.id}
                                                    name={user.name}
                                                    avatar={user.avatar}
                                                />
                                            </Button>
                                    ))}
                                    </Box>          
                                ) : (
                                    <Typography p={1} variant="body1" fontWeight={"bold"}>
                                        Không tìm thấy người dùng
                                    </Typography>
                                )
                            }
                        </Box>
                    )}
                </Box>    

                <Box
                    sx={{
                        display:"flex",
                        flexDirection: 'column',
                        height: '100%',
                        py: 1,
                        

                        overflowY: 'scroll',
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
                    {users.map((user) => {
                            if (currentUser && user.id !== currentUser.id){
                                return (
                                    <Button
                                        key={user.id}
                                        onClick={() => {
                                            console.log("Clicked user:", user.id)
                                            onSend(user)}}
                                        sx={{
                                            display: 'flex',
                                            justifyContent:'start',
                                            width:'100%',
                                            ...(user.id === (currentChatWith.id || 0))? {
                                            bgcolor: "#bda791ff"} :{}
                                        }}
                                    >
                                        <User 
                                            key={user.id}
                                            name={user.name}
                                            avatar={user.avatar}
                                            status={"online"}
                                        />
                                    </Button>
                            )}}
                    )}
                </Box>
            </Box>
        
    );
}
export default React.memo(ChatBox)