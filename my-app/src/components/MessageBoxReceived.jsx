import { Avatar, Box, Button, Container, IconButton, Paper, TextField, Typography } from "@mui/material";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
export default function MessageBoxReceived ({content}) {
    return (
            <Box
                display={"flex"}
                p={2}
                gap={2}
            >
                <Box>
                    <Avatar
                        sx={{
                            height:'50px',
                            width:'50px',
                            border: '2px solid #000000',
                        }}>
                        <PermIdentityIcon />
                    </Avatar>
                </Box>

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
                >
                    <Typography variant="body1" fontSize={'1.2rem'}>{content}</Typography>

                    <Typography variant="caption text" alignSelf={"end"} fontSize={'0.8rem'} p={'5px'}>thời gian gửi</Typography>
                    
                </Box>
            </Box>
    );
}