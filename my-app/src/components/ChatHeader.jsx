import { Box, Button, Container, IconButton, Paper, TextField, Typography } from "@mui/material";
import User from './User';
import CallIcon from '@mui/icons-material/Call';
import MoreVertIcon from '@mui/icons-material/MoreVert';
export default function ChatHeader() {
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
                <Box display={'flex'} alignItems={'start'} mx={''}>
                    <User           
                        key={1}
                        name={"Nhat Minh"}
                        status={"online"}/>
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
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </Box>
            </Box>
    );
}