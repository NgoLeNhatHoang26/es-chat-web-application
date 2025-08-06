import { useEffect ,useState } from "react";
import socket from "../socket";
import { useChat } from "../context/ChatContext";
import { experimental_sx, Typography, Box} from "@mui/material";

export default function TypingIndicator({userId}) {
    
    const [isTyping, setIsTyping] = useState(false);
    const [typingUser, setTypingUser] = useState("");
    const {currentChatWith} = useChat();
    console.log("TypingIndicator re-render", isTyping, typingUser)


useEffect(() => {
  console.log("Setting up socket listeners for typing indicator");
  socket.on("user-typing", ({senderId, receiverId}) => {
    console.log("Received typing event from:", senderId, "for receiver:", receiverId);
    if (receiverId === userId && senderId === currentChatWith.id) {
      setIsTyping(true);
      setTypingUser(currentChatWith.name || "User");
      console.log(`${senderId} is typing...`);
    }
  });

  socket.on("user-stop-typing", ({senderId, receiverId}) => {
    if (receiverId === userId && senderId === currentChatWith.id) {
      setIsTyping(false);
      setTypingUser("");
      console.log("User stopped typing");
    }
  });

  return () => {
    socket.off("user-typing");
    socket.off("user-stop-typing");
  };
}, [socket, userId, currentChatWith.id]);

    return (
      isTyping && (
        <Box
          display={"flex"}
          justifyContent={'center'}
          alignItems={'center'}
          py={1}
          px={2}
          bgcolor={"#F7F1ED"}
          border={"1px solid #000000"}
          borderRadius={6}
          width={"fit-content "}
          >
            <Typography alignSelf={"center"} variant="body1" sx={{ fontSize: "1rem", fontStyle: "italic" }}>
                <span>{typingUser} is typing...</span>
            </Typography>          
          </Box>
      )
    );
}