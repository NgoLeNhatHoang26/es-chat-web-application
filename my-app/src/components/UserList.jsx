import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box } from "@mui/material";
import User from "./User";
import mockUsers from "../data/MOCK_DATA.json";
export default function UserList (){
  const [users, setUsers] = useState([]);
  useEffect(() => {
    setUsers(mockUsers);
  }, []);

    return (

        <Box
            width="100%" 
            maxWidth="400px" 
            mx='0'
        >
            {users.map((users) => (
                <Box 
                    mb={2}
                >
                    <User 
                        key={users.id}
                            name={users.name}
                            avatar={users.avatar}
                            status={"online"}
                    />
                </Box>
            ))}
        </Box>

    );
}