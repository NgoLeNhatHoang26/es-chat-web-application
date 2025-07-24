import { Box,Avatar, Button, Container, Paper, TextField, Typography , Stack} from "@mui/material";
import theme from "../theme";
import PersonIcon from "@mui/icons-material/Person";
export default function User({ name, avatar, status }) {
    return(
        <Box
            display={'flex'}
            alignItems="center"
            py={0.5}
            px={3}
            gap={2}
            width={'fit-content'}
        >
            <Avatar
                src={avatar}
                sx={{
                    height:'50px',
                    width:'50px',
                    border: '2px solid',
                    borderColor: '#000000',
                }}
            > 
                {!avatar && <PersonIcon />}
            </Avatar>
            <Stack direction="column" spacing={0}  >
                <Typography variant="h5" fontWeight={'bold'} color="#2A2A2A">{name}</Typography>
                <Typography variant="subtitle1" color="#5C5C5C">{status}</Typography>
            </Stack>
        </Box>
    );
}