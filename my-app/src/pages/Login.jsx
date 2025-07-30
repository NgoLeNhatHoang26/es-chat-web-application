import { Box, Button, Container, Paper, TextField, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import bg from './asset/Rectangle62.png';
import axios from "axios";
import { useState, useCallback,useEffect } from "react";

export default function Login() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [signInName, setSignInName] = useState("")
  const [signInPassword, setSignInPassword] = useState("")
  const [users, setUsers] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:3001/users")
      .then(res => setUsers(res.data))
      .catch(err => console.error(err))
  },[])

  const handleLogin = () => {
    const matchedUser = users.find(user => 
    user.name === signInName && user.password === signInPassword)
    if(matchedUser){ 
      navigate("/home")
    } else {
      setSignInName("")
      setSignInPassword("")
      console.error("Không đúng tên đăng nhập hoặc mật khẩu")
    }
  }
  const handleSignin = () => {
    navigate("/signin");
  }

  return (
    <Box
      height={'100vh'}
      width={'100vw'}
      position="relative"
      overflow= 'hidden'
      bgcolor={'#EFE6DD'}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '80%',
          height: '60%', 
          backgroundImage: `url(${bg})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          zIndex: 0,
          }}
      />

      <Box 
        display= "flex"
        height="100vh"
        width="100vw"
        flexDirection= "column"
        justifyContent="center"
        alignItems="center"
        position={"relative"}
        zIndex={1}
      >
          <Typography  variant="h1" fontWeight={"bold"} fontSize={'8vw'} mr={'20vw'} mb={4}>
            WitChat
          </Typography>
        <Paper
          elevation={10}
          sx={{
            display: "flex",          
            flexDirection: "column",  
            alignItems: "center",
            justifyContent: "space-evenly",
            width: '50vw',
            height: 'auto',
            pb:4,
            border: '2px solid',
            borderRadius: 8,
          }}
        >
          <Typography variant="h2" mt={3} p={3} fontWeight={"bold"} fontSize={'4vw'}  >
            Đăng nhập
          </Typography>
          
          <Box 
            display={"flex"}
            flexDirection={"column"}
            width={'50%'}
            sx={{mt: '5%'}}
            gap={4}  
          >  
            <TextField 
              value={signInName}
              onChange={(e) => setSignInName(e.target.value)}
              label="Tên đăng nhập"
                InputLabelProps={{
                sx: {
                  p: 1,
                  fontSize: 20,
                  }
                }}
              sx={{ 
                '& .MuiOutlinedInput-root': {
                  border: '1px solid',
                  borderRadius: 6,
                  padding:1,
                },
                borderRadius: 6
              }}
            /> 
            <TextField label="Mật khẩu" type="password" fullWidth
                value={signInPassword}
                onChange={(e) => setSignInPassword(e.target.value)}
                InputLabelProps={{
                  sx: {
                    p: 1,
                    fontSize: 20,
                    }
                  }}
                sx={{ 
                  '& .MuiOutlinedInput-root': {
                    border: '1px solid',
                    borderRadius: 6,
                    padding:1,
                  },
                  borderRadius: 6
                }}
            />
          </Box>
          <Button
            sx={{
              color:"#000000",
              ml:'50%',
              fontSize: '1.1rem',
              "&:hover": {
                color: "rgba(0, 0, 0, 0.6)",
          },
            }}
          >
            Quên mật khẩu
          </Button>
          <Button
            variant="outlined"
            onClick={handleLogin}
            color="secondary"
            sx={{
              width: '30%',
              padding: '12px 0px',
              borderRadius: 8,
              fontSize: '1.5rem'
            }}
          >
            Đăng nhập</Button> 
          <Button
            variant="outlined"
            onClick={handleSignin}
            sx={{
              backgroundColor:'#CBB9A8',
              mt: 3,
              width: '25%',
              padding: '12px 10px',
              borderRadius: 7,
              fontSize: '1.2rem'
            }}
          >
            Đăng ký</Button>               
        </Paper>

      </Box>
    </Box>
  );
}
