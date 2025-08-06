import { Box,Avatar, Button, Container, Paper, TextField, Typography , Stack} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
export default function Group({ name, avatar, status }) {
    return(
        <Box
            display={'flex'}
            alignItems="center"
            justifyContent={'start'}
            gap={2}
        >
            <Avatar
                src={avatar}
                sx={{
                    border: '2px solid',
                    borderColor: '#000000',
                }}
            > 
                {!avatar && <PersonIcon />}
            </Avatar>
            <Stack direction="column" spacing={0}  >
                <Typography variant="h5" fontWeight={'bold'} color="#2A2A2A" fontSize={"1.2remv"}>{name}</Typography>
                <Typography variant="subtitle1" color="#5C5C5C" alignSelf={"start"}>{status}</Typography>
            </Stack>
        </Box>
    );
}