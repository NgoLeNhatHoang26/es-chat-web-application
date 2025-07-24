import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box } from "@mui/material";
import User from "./User";

export default function UserList (){
  const [users, setUsers] = useState([]);

    useEffect(() => {
    const mockUsers = [
        { id: 1, name: "Hoang", avatar: "", status: "Online" },
        { id: 2, name: "Mai", avatar: "", status: "Offline" }
    ];
    setUsers(mockUsers);
    }, []);
    return (
        <Box>
            {users.map((users) => (
                <User
                    key={users.id}
                    name={users.name}
                    avatar={users.avatar}
                    status={users.status}
                />
            ))}
        </Box>

    );
}