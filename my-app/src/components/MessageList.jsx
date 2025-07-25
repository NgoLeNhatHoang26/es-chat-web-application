import { Avatar, Box, Button, Container, IconButton, Paper, Stack, TextField, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import mockMessage from "../data/message.json"
import MessageBoxReceived from "./MessageBoxReceived";
import MessageBoxSend from "./MessageBoxSend";

export default function ChatBoxList() {
    const [messages, setMessages] = useState([])
    useEffect(() => {
        setMessages(mockMessage); // ✅ Gán dữ liệu JSON vào state
    }, []);
    return (
        <Stack>
            {messages.map((msg) => {
                    if ( msg.id %2 ===0){
                        return (
                            <Box display="flex" justifyContent="flex-start" key={msg.id} my={3}>
                                <MessageBoxReceived content={msg.message}/>
                            </Box>
                        );
                    } else {
                        return (
                            <Box display="flex" justifyContent="flex-end" key={msg.id} my={3}>
                                <MessageBoxSend content={msg.message} />
                            </Box>
                        );
                    }

                }
            )}
        </Stack>
    );
}