import { Box, Button, Container, Paper, TextField, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import LogoutIcon from '@mui/icons-material/Logout';
export default function OptionToolBox() {
    return (
        <Box
            gap={3}
            sx={{
                width: "100%",
                height: "fit-content",
                display: "flex",
                flexDirection: "column",
                alignContent: "center",
                borderRadius: 5,
                bgcolor: "#D6C2B5",
                border: "1px solid",
                p: 3
            }}
        >
            <Button
                variant="outlinedPrimary"
                sx={{
                    borderRadius: '12px',
                    border: '1px solid #000000'
                }}
            >
                <Box
                    display={"flex"}
                    alignItems={"center"}
                    width={"100%"}
                    color={"#000000"}
                    fontWeight={"bold"}
                    gap={1}
                >
                <SearchIcon />
                Tìm kiếm tin nhắn
                </Box>
            </Button>
            <Button
                variant="outlinedPrimary"
                sx={{
                    borderRadius: '12px',
                    border: '1px solid #000000'
                }}
            >
                <Box
                    display={"flex"}
                    alignItems={"center"}
                    width={"100%"}
                    color={"#000000"}
                    fontWeight={"bold"}
                    gap={1}
                >
                <InsertDriveFileIcon />
                File phương tiện
                </Box>
            </Button>       
            <Button
                variant="outlinedPrimary"
                sx={{
                    borderRadius: '12px',
                    border: '1px solid #000000'
                }}
            >
                <Box
                    display={"flex"}
                    alignItems={"center"}
                    color={"#000000"}
                    fontWeight={"bold"}
                    gap={1}
                >
                <LogoutIcon />
                Rời khỏi cuộc trò chuyện
                </Box>
            </Button>              

            
        </Box>

    );
}