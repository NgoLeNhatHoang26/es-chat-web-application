import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Button } from "@mui/material";
import User from "./User";
export default function UserList (){

    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3001/users")
            .then(res => setUsers(res.data))
            .catch(err => console.error(err));
    }, []);
    const handleChangeUser = () =>{
    
    }
    return (

        <Box>
            {users.map((user) => (
                    <Button
                    onClick={handleChangeUser}
                    sx={{
                        display: 'flex',
                        justifyContent:'start',
                        width:'100%'
                    }}>
                    <Box
                    >
                        <User 
                            key={user.id}
                            name={user.name}
                            avatar={user.avatar}
                            status={"online"}
                        />
                    </Box>
                    </Button>

            ))}
        </Box>

    );
}