import { Avatar, Box, Button, Container, Paper, TextField, Typography } from "@mui/material";
import { useChat  } from "../context/ChatContext";
import { useEffect, useState } from "react";
export default function UserProfile ({userprofile}) {
    const [user,setUser] = useState(userprofile || {
        name: "",
        SDT: "",
        password: "",
    })
    return (
        <Box
            gap={3}
            sx={{
                width: "100%",
                height: "fit-content",
                display: "flex",
                flexDirection: "column",
                alignContent: "center",
            }}
        >
            <Typography
                variant="h4"
                alignSelf={"center"}
                sx={{
                    fontWeight: "bold", 
                    fontSize: "3vw"
                }}
            >
                Thông tin cá nhân
            </Typography>

            <Avatar src={user.avatar} alt={user.name} sx={{ width: '10vw', height: '10vw', alignSelf: 'center' }} />
            <Box
                display={"flex"}
                flexDirection={"column"}
                alignSelf={"center"}
                gap={2}
                width={"80%"}
            >
                <Typography
                    fontWeight={"bold"}>
                    Tên đăng nhập
                </Typography>
                <Typography 
                    bgcolor={"#ffffff"}
                    p={2}
                    borderRadius={6}
                >
                    {user.name}
                </Typography>
                <Typography
                    fontWeight={"bold"}
                >
                    Số điện thoại
                </Typography>
                <Typography 
                    bgcolor={"#ffffff"}
                    p={2}
                    borderRadius={6}
                >
                    {user.SDT}
                </Typography>
                <Typography
                    fontWeight={"bold"}
                >
                    Mật khẩu
                </Typography>
                <Typography 
                    bgcolor={"#ffffff"}
                    p={2}
                    borderRadius={6}
                >
                    {user.password}
                </Typography>
            </Box>
        </Box>

    );
}