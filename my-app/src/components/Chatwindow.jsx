import { Box, Button, Container, Paper, TextField, Typography } from "@mui/material";
import theme from "../theme";

import UserList from "./UserList";
export default function ChatWindow() {
    return (

            <Box
                display={'flex'}
                flexDirection={"column"}
                bgcolor={theme.palette.secondary.main}
                height={'100vh'}
                border={'1px solid'}

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
                        height: '80vh', // Chưa tốt
                        width: '100%',
                        overflowY: 'scroll',
                        p: '3px',
        
                        // 👇 Custom Scrollbar
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
                    <Box>
                        <UserList />
                    </Box>
                    
                </Box>
            </Box>
        
    );
}