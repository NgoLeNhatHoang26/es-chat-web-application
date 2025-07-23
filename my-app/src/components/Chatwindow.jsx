import { Box, Button, Container, Paper, TextField, Typography } from "@mui/material";
import theme from "../theme";

export default function ChatWindow() {
    return (
        <Container
            maxWidth={"false"}
            disableGutters
            sx={{
                width: '20vw', // hoặc '20%'
                ml: 0,         // dính vào mép trái
                pl: 0,
             }}
        >
            <Box
                display={'flex'}
                flexDirection={"column"}
                alignItems={'center'}
                bgcolor={theme.palette.secondary.main}
                minHeight={'100vh'}

            >
                <Typography
                    variant="h3"
                    fontWeight={"bold"}
                    bgcolor={"#A1887F"}
                    MaxHeight={'10vh'}
                    width={'100%'}
                    fontSize={'4vw'}
                    py={2}
                    pl={2}
                >Chatbox
                </Typography>
                <Box
                    bgcolor={"#C6B4A3"}
                    width={'100%'}
                    py={2}
                    px={1}
                >
                    <TextField
                        placeholder="Tìm kiếm người dùng"
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                width:'100%',
                                borderRadius: 4,
                                fontSize: '1em',
                                padding:1,
                            },
                        borderRadius: 4,
                        width:'100%'
                        }}
                    />
                </Box>    
                <Box
                    sx={{
                        height: '78vh', // Chưa tốt
                        width: '100%',
                        overflowY: 'scroll',
                 
        
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
                    {[...Array(50)].map((_, i) => (
                        <Typography key={i}>Dòng {i + 1}</Typography>
                    ))}
                </Box>
            </Box>
        </Container>
    );
}