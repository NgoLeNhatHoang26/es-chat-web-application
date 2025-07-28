import { Box, Button, Container, experimental_sx, IconButton, Paper, TextField, Typography } from "@mui/material";
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import { useState } from "react";
export default function InputBar({onSend}) {
    const [text, setText] = useState("");
    const handleSend = () => {
        if (text.trim())
        {
            onSend(text);
            setText("")
        }
    }
    return(
            <Box
                display={"flex"}
                alignItems={'center'}
                justifyContent={"space-between"}
                bgcolor={"#C6B4A3"}
                border={'1px solid'}
                borderColor={"#000000"}
                py={1.5}
                px={3}
                gap={4}
            >
                <IconButton
                >
                    <SentimentSatisfiedAltIcon />
                </IconButton>
                <IconButton>
                    <AttachFileIcon />
                </IconButton>
               
                <TextField placeholder="Nhập tin nhắn..."
                    sx={{
                        width: '90%'
                    }}
                    value={text}
                    onChange={e => setText(e.target.value)}
                />

                <IconButton onClick={handleSend}>
                    <SendIcon />
                </IconButton>

            </Box>
       
    );
}