import { Box, Stack} from "@mui/material";
import MessageBoxReceived from "./MessageBoxReceived";
import React, { useState } from "react";
import MessageBoxSend from "./MessageBoxSend";
import { useChat } from "../context/ChatContext";
import TypingIndicator from "./TypingIndicator";
function MessageList({messages}) {
    const {currentUser, currentChatWith} = useChat()
    return (
        <Box>
            <Stack>
                {messages.map((msg, index) => {
                        if ( msg.senderId !== currentUser.id){
                            return (
                                <Box display="flex" justifyContent="flex-start" key={index} my={3}>
                                    <MessageBoxReceived avatar={currentChatWith.avatar} type={msg.type} content={msg.content} time={msg.timeStamp}/>
                                </Box>
                            );
                        } else {
                            return (
                                <Box display="flex" justifyContent="flex-end" key={index} my={3}>
                                    <MessageBoxSend avatar={currentUser.avatar} type={msg.type} content={msg.content} time={msg.timeStamp}/>
                                </Box>
                            );
                        }

                    }
                )}
            <TypingIndicator userId={currentUser.id}  />
            </Stack>

            

        </Box>
    );
}
export default React.memo(MessageList);