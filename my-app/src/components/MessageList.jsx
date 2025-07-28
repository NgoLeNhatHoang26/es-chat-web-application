import { Avatar, Box, Button, Container, IconButton, Paper, Stack, TextField, Typography } from "@mui/material";
import MessageBoxReceived from "./MessageBoxReceived";
import MessageBoxSend from "./MessageBoxSend";
export default function ChatBoxList({messages}) {
    return (
        <Box>
            <Stack>
                {messages.map((msg, index) => {
                        if ( msg.senderId !== "userId_1"){
                            return (
                                <Box display="flex" justifyContent="flex-start" key={index} my={3}>
                                    <MessageBoxReceived content={msg.text} time={msg.timeStamp}/>
                                </Box>
                            );
                        } else {
                            return (
                                <Box display="flex" justifyContent="flex-end" key={index} my={3}>
                                    <MessageBoxSend content={msg.text} time={msg.timeStamp}/>
                                </Box>
                            );
                        }

                    }
                )}
            </Stack>
        </Box>
    );
}