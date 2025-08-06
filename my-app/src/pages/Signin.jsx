import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import bg from './asset/Rectangle62.png';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Signin() {
  const navigate = useNavigate();
  const [newestUser,setNewestUser] = useState()
  const [signInName,setSignInName]= useState("")
  const [password,setPassword] = useState("")
  const [phoneNumber, setphoneNumber] = useState("")
  const [retryPassword,setRetryPassword] = useState("")
  const [failSignin, setFailSignin] = useState("");
  useEffect(() => {
    axios.get("http://localhost:3001/users")
        .then(res =>{ 
            if ( res.data.length > 0)
            setNewestUser(res.data[res.data.length-1])
            console.log(res.data[res.data.length-1])
        })
        .catch(err => console.error(err))
  },[])
  const handleLogin = () => {
    navigate("/")
  }
  const handleVerifyPassword = () =>{
    if ( retryPassword === password && password !== ""){
    const newUser = {
        id : newestUser ? parseInt(newestUser.id)+1 : 0,
        name : signInName,
        password : password,
        SDT : phoneNumber
    }
    axios.post("http://localhost:3001/users", newUser)
    handleLogin()
    }   else {
        setFailSignin("Mật khẩu không khớp")
        setPassword("")
        setRetryPassword("")
    }
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
        >
        </Box>

        <Box
            display="flex"
            height="100%"
            width="100%"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            position="relative"
            zIndex={1}
        >         
            <Typography  variant="h1" fontWeight={"bold"} fontSize={'5vw'} mr={'20vw'} mb={4}>
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
            <Typography variant="h2" mt={3} pt={3} fontWeight={"bold"} fontSize={'4vw'}  >
                Đăng ký
            </Typography>
            
            <Box display={"flex"}
                flexDirection={"column"}
                width={'50%'}
                sx={{mt: '5%'}}
                gap={3}  
                fontSize={10}
                >  
                <TextField 
                onChange={(e) => setSignInName(e.target.value)}
                label="Tên đăng nhập"
                    InputLabelProps={{
                    sx: {
                    p: 1,
                    fontSize: '1.5em',
                    }
                    }}
                sx={{ 
                    '& .MuiOutlinedInput-root': {
                    border: '1px solid',
                    borderRadius: 6,
                    },
                    borderRadius: 6
                }}
                /> 
                <TextField label="Số điện thoại" 
                    onChange={(e) => setphoneNumber(e.target.value)}
                    InputLabelProps={{
                    sx: {
                    p: 1,
                    fontSize: '1.5em',
                    }
                    }}
                    sx={{ 
                    '& .MuiOutlinedInput-root': {
                        border: '1px solid',
                        borderRadius: 6,
                    },
                    borderRadius: 6
                    }}
                />
                <TextField 
                value={password}
                label="Mật khẩu"
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                    InputLabelProps={{
                    sx: {
                    p: 1,
                    fontSize: '1.5em',
                    }
                    }}
                sx={{ 
                    '& .MuiOutlinedInput-root': {
                    border: '1px solid',
                    borderRadius: 6,
                    },
                    borderRadius: 6
                }}
                />
                <TextField 
                value={retryPassword}
                onChange={(e) => setRetryPassword(e.target.value)}
                label="Nhập lại mật khẩu"
                type="password"
                    InputLabelProps={{
                    sx: {
                    p: 1,
                    fontSize: '1.5em',
                    }
                    }}
                sx={{ 
                    '& .MuiOutlinedInput-root': {
                    border: '1px solid',
                    borderRadius: 6,
                    },
                    borderRadius: 6
                }}
                />  
            </Box>
            {failSignin && (
                <Typography color="error" variant="body1" sx={{ mt: 2 }}>
                {failSignin}
                </Typography>
            )}
            <Button
                variant="outlinedSecondary"
                onClick={handleVerifyPassword}
                sx={{
                    mt: 3,
                    width: '30%',
                    padding: '12px 0px',
                    borderRadius: 8,
                    fontSize: '1.5rem'
                }}
            >
                Đăng ký</Button> 
            <Button
                variant="outlined"
                onClick={handleLogin}
                sx={{
                backgroundColor:'#CBB9A8',
                mt: 3,
                width: '25%',
                padding: '12px 10px',
                borderRadius: 7,
                fontSize: '1.2rem'
                }}
            >
                Đăng nhập</Button>               
            </Paper>
        </Box> 
      </Box>

  );
}
