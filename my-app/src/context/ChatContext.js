import { Children, createContext, useContext, useState } from "react";

const ChatContext = createContext();

export const ChatProvider = ({children}) =>{
    const [currentChatWith, setCurrentChatWith] = useState(null);
    const [messages, setMessages] = useState([])
    return (
        <ChatContext.Provider value={{
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