import { Avatar, Box, Button, Container, IconButton, Paper, TextField, Typography } from "@mui/material";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
export default function MessageBoxReceived ({avatar,type,content, time}) {
    return (
            <Box
                display={"flex"}
                gap={2}
            >
                <Box>
                    {
                    avatar ? (
                    <Avatar src={avatar} alt="User Avatar" sx={{ width: '3vw', height: '3vw' }} />
                    ) : (
                    <Avatar
                        sx={{
                            height:'50px',
                            width:'50px',
                            border: '2px solid',
                            borderColor: '#000000',
                        }}>
                        <PermIdentityIcon />
                    </Avatar>
                    )

                }
                </Box>
                {type === "text" ? (
                    <Box
                        display={"flex"}
                        flexDirection={"column"}
                        maxWidth={'40vw'}
                        width={'fit-content'}
                        height={'fit-content'}
                        bgcolor={"#F7F1ED"}
                        px={2}
                        pt={2}
                        border={"1px solid #000000"}
                        borderRadius={6}
                        sx={{
                        overflowWrap: 'break-word',
                        wordBreak: 'break-word',
                        whiteSpace: 'pre-wrap',
                        textAlign: 'left',
                        }}
                    >
                        <Typography variant="body1" fontSize={'1.2rem'}>{content}</Typography>

                        <Typography variant="caption text" alignSelf={"end"} fontSize={'0.8rem'} p={'5px'}>{time}</Typography>
                        
                    </Box>
                ) : (
                    <Box
                        display={"flex"}
                        flexDirection={"column"}
                        maxWidth={'40vw'}
                        width={'fit-content'}
                        height={'fit-content'}
                        borderRadius={6}
                    >
                        <img src={content} alt="Attached" style={{ maxWidth: '100%', borderRadius: '8px' }} />

                        <Typography variant="caption text" alignSelf={"end"} fontSize={'0.8rem'} p={'5px'}>{time}</Typography>
                        
                    </Box>
                )}
            </Box>
    );
}