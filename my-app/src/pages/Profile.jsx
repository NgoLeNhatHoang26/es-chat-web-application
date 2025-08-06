import { Avatar, Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import SideBarButtons from "../components/SidebarFunction";
import UserProfile from "../components/UserProfile";
import { useChat } from "../context/ChatContext";
import axios from "axios";
export default function Profile() {

    const {currentChatWith,setCurrentUser, currentUser} = useChat()
    const [user,setUser] = useState(currentUser)
    useEffect(() => {
        setUser(currentUser)
    },[currentUser])
    const [goHome,setGoHome] = useState(false)
    const navigate = useNavigate()
    const [userName,setUserName] = useState(currentUser.name)
    const [phone,setPhone] = useState(currentUser.SDT)
    const [password,setPassword] = useState("")
    const [retryPassword,setRetryPassword] = useState("")
    const [showProfile, setShowProfile] = useState(true)
    const [showChangeInfor, setShowChangeInfor] = useState(false)
    console.log(goHome)
    console.log(currentUser)
    useLayoutEffect(() => {
        if(!goHome){
            setGoHome(true)
        } else {
            navigate("/home")
        }
    },[currentChatWith])

    const handleChangePassword = () =>{
        setShowProfile(false)
    }
    const handleResetPassword = useCallback ( async () => {
        const userid = currentUser
        console.log(userid)
        if ( retryPassword === password && password !== ""){
            try {
            const updated =  await axios.patch(`http://localhost:3001/users/${userid.id}`,{
                password : password,
            })
            setCurrentUser(updated.data)
            navigate("/home")
        } catch (error) {
            console.error("Error updating password:", error);
        }} else {
            setRetryPassword("")
            setPassword("")
            console.error("Mật khẩu không khớp hoặc không hợp lệ")
         }
    },[password,retryPassword])
    const handleChangeInfor = useCallback ( async () => {
        const userid = currentUser
        console.log(userid)
        try {
            const updated =  await axios.patch(`http://localhost:3001/users/${userid.id}`,{
                name : userName,
                SDT: phone,
            })
            setCurrentUser(updated.data)
            navigate("/userprofile")
        } catch (error) {
            console.error("Error", error)
        }
        
    },[userName, phone])
    const handleChangAvatar = (e) => {
        const file = e.target.files[0]
        if (file) {
            const reader = new FileReader();
            
            reader.onloadend = () => {
                const updatedAvatar = reader.result;
                setUser(prevUser => ({
                    ...prevUser,
                    avatar: updatedAvatar
                }));
                axios.patch(`http://localhost:3001/users/${currentUser.id}`, {
                    avatar: updatedAvatar
                })
                .then(response => {
                    console.log("Avatar updated successfully:", response.data);
                    localStorage.setItem("currentUser", JSON.stringify({
                    ...currentUser,
                    avatar: updatedAvatar
                }))
                })
                .catch(error => {
                    console.error("Error updating avatar:", error);
                });
            };
            reader.readAsDataURL(file);

        }
    }
    return(
        <Box
            display={"flex"}
            justifyContent={"space-between"}
            gap={1}
        >   
            <Box 
                display={"flex"}
            >
                <SideBarButtons />
            </Box>

            <Box
                display={'flex'}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                width={'80vw'}
                height={'100vh'}
                bgcolor={"#E8DCD1"}
                border={"1px solid"}
                gap={1}
                flex={1}
            >
                { (showProfile && !showChangeInfor ) && (
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
                    
                    <UserProfile userprofile={user}/>
                
                    <Button
                        onClick={handleChangePassword}
                        variant="outlinedSecondary"
                        sx={{
                            fontSize:'1.2rem',
                        }}
                        >
                        Đổi mật khẩu
                    </Button>
                    <Button
                        onClick={() => setShowChangeInfor(true)}
                        variant="outlinedSecondary"
                        sx={{
                            fontSize:'1.2rem'
                        }}
                    >
                        Đổi thông tin cá nhân
                    </Button>
                </Box>
                )}
 
                { (!showProfile && !showChangeInfor)  && (
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
                        Đặt lại mật khẩu
                    </Typography>
                    
                    <Box display={"flex"}
                        flexDirection={"column"}
                        width={'50%'}
                        sx={{mt: '5%'}}
                        gap={3}  
                        fontSize={10}
                        >  
                        <TextField 
                        label="Mật khẩu mới"
                        value={password}
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
                    <Button
                        variant="outlinedSecondary"
                        onClick={handleResetPassword}
                        sx={{
                            mt: 3,
                            width: '30%',
                            padding: '12px 0px',
                            borderRadius: 8,
                            fontSize: '1.5rem'
                        }}
                    >
                        Xác nhận
                    </Button>
                                        <Button
                        variant="outlinedSecondary"
                        onClick={() => setShowProfile(true)}
                        sx={{
                            mt: 3,
                            width: '30%',
                            padding: '12px 0px',
                            borderRadius: 8,
                            fontSize: '1.5rem'
                        }}
                    >
                        Hủy
                    </Button>            
                </Paper>
                )}
                {/* Chỉnh sửa thông tin cá nhân*/}
                { showChangeInfor &&(
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
                    <Box display={"flex"}
                        flexDirection={"column"}
                        width={'70%'}
                    >
                        <Typography variant="h3" mt={3} pt={3} fontWeight={"bold"} fontSize={'4vw'}>
                            Chỉnh sửa thông tin cá nhân
                        </Typography>
                    </Box>

                    
                    <Box display={"flex"}
                        flexDirection={"column"}
                        width={'50%'}
                        sx={{mt: '5%'}}
                        gap={3}  
                        fontSize={10}
                        >  
                        <TextField 
                        label="Tên tài khoản"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
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
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        label="Số điện thoại"
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
                        <Typography variant="h5" fontWeight={"bold"} fontSize={'2vw'}>
                            Đổi ảnh đại diện
                        </Typography>
                        <input type="file" onChange={handleChangAvatar}/>  
                    </Box>
                    <Button
                        variant="outlinedSecondary"
                        onClick={handleChangeInfor}
                            
                        sx={{
                            mt: 3,
                            width: '30%',
                            padding: '12px 0px',
                            borderRadius: 8,
                            fontSize: '1.5rem'
                        }}
                    >
                        Xác nhận
                    </Button>
                    <Button
                        variant="outlinedSecondary"
                        onClick={() => {
                            setShowProfile(true)
                            setShowChangeInfor(false)
                        }}
                        sx={{
                            mt: 3,
                            width: '30%',
                            padding: '12px 0px',
                            borderRadius: 8,
                            fontSize: '1.5rem'
                        }}
                    >
                        Hủy
                    </Button>            
                </Paper>
                )}
            </Box>

            
        </Box>
    );
}
