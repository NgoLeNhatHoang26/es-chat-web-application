import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import bg from './asset/Rectangle62.png';
import axios from "axios";
import { useState, useEffect, useLayoutEffect } from "react";
import { useChat } from "../context/ChatContext";
export default function Login() {
  const navigate = useNavigate();
  const [signInName, setSignInName] = useState("")
  const [signInPassword, setSignInPassword] = useState("")
  const [users, setUsers] = useState([])
  const [failLogin, setFailLogin] = useState("")
  const {currentUser,setCurrentUser} = useChat()

  useEffect(()=> {
    const savedUser = localStorage.getItem("currentUser")
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser))
    }
  },[])

  useEffect(()=>{
    axios.get("http://localhost:3001/users")
      .then(res => setUsers(res.data))
      .catch(err => console.error(err))
  },[])

  useEffect(() => {
  if (currentUser.id !== 0) {
    console.log("Thực hiện đăng nhập")
    console.log("Current user:", currentUser)
    navigate("/home");
  }
  }, [currentUser]);

  const handleLogin = () => {
    const matchedUser = users.find(user => 
    user.name === signInName && user.password === signInPassword)
    console.log(matchedUser)
    if(matchedUser){ 
      localStorage.setItem("currentUser", JSON.stringify(matchedUser))
      setCurrentUser(matchedUser)
    } else {
      setSignInName("")
      setSignInPassword("")
      setFailLogin("Sai tên đăng nhập hoặc mật khẩu")
    }
  }
  const handleSignin = () => {
    navigate("/signin");
  }

  const handleForgotPassword = () =>{
    navigate("/forgotpassword")
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
          {failLogin && (
            <Typography color="error" variant="body1" sx={{ mt: 2 }}>
              {failLogin}
            </Typography>
          )}
          <Button
            onClick={handleForgotPassword}
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
