import { Children, createContext, useContext, useState } from "react";
import { useEffect } from "react";
const ChatContext = createContext();

export const ChatProvider = ({children}) =>{
    const [currentUser, setCurrentUser] = useState({
        id : 0,
        name: "",
        SDT: "",
    });
    const [currentChatWith, setCurrentChatWith] = useState({
        id : 0,
        name: "",
        SDT: "",
    });
    const [messages, setMessages] = useState([])
    return (
        <ChatContext.Provider value={{
            currentUser,
            setCurrentUser,
            currentChatWith,
            setCurrentChatWith,
            messages,
            setMessages
        }}>
            {children}
        </ChatContext.Provider>
    );
}
export const useChat = () => useContext(ChatContext);