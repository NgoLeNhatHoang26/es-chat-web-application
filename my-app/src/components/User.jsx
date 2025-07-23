import { Box,Avatar, Button, Container, Paper, TextField, Typography , Stack} from "@mui/material";
import theme from "../theme";
import PersonIcon from "@mui/icons-material/Person";
export default function User() {
    return(
        <Box
            display={'flex'}
            alignItems="center"
            padding={1}
            gap={2}
            width={'fit-content'}
        >
            <Avatar> 
                <PersonIcon />
            </Avatar>
            <Stack direction="column" spacing={0}  >
                <Typography variant="h6" fontWeight={'bold'} color="#2A2A2A">User_name</Typography>
                <Typography variant="subtitle1" color="#5C5C5C">Content</Typography>
            </Stack>
        </Box>
    );
}