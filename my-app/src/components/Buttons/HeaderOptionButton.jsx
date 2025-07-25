import { Avatar, Box, Button, Container, IconButton, Fade, TextField, Typography } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from "react";
import OptionToolBox from "../OptionToolsBox";
export default function ButtonMore() {
    const [showOptions, setShowOptions] = useState(false);
    return (
        <Box
            bgcolor={"#CBB9A8"}
        >

            <IconButton
                variant="outlinedPrimary"
                onClick={() => setShowOptions(!showOptions)}
            >
                <MoreVertIcon />
            </IconButton>
            {showOptions && 
            <Box
                sx={{
                    position:'absolute',
                    top:'7vh',
                    right: 15,
                    zIndex: 2000,
            }}
            > 
                <OptionToolBox />
            </Box>}
        </Box>
    );
}