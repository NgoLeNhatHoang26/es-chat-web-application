import { Box, Button, Container, Paper, TextField, Typography } from "@mui/material";

export default function UserProfile () {
    return (
        <Box
            gap={3}
            sx={{
                width: "70%",
                height: "fit-content",
                display: "flex",
                flexDirection: "column",
                alignContent: "center",
                borderRadius: 5,
                bgcolor: "#D6C2B5",
                border: "1px solid",
                p: 5,
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
                    Thông tin tên đăng nhập
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
                    Thông tin số điện thoại
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
                    Thông tin mật khẩu
                </Typography>
                <Box
                    width={"50%"}
                    display={"flex"}
                    flexDirection={"column"}
                    alignSelf={"center"}
                    gap={2}
                    mt={3}
                >
                    <Button
                        variant="outlinedSecondary"
                        sx={{
                            fontSize:'1.2rem',
                        }}
                    >
                        Đổi mật khẩu
                    </Button>
                    <Button
                        variant="outlinedSecondary"
                        sx={{
                            fontSize:'1.2rem'
                        }}
                    >
                        Thêm phần giới thiệu
                    </Button>
                </Box>

            </Box>
        </Box>

    );
}