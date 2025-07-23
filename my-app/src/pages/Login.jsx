import { Box, Button, Container, Paper, TextField, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';

export default function Login() {
  const theme = useTheme();
  return (
  <Container
        maxWidth='sx'>
      <Box 
        minHeight = "100vh"
        display= "flex"
        flexDirection= "column"
        alignItems= "center"
      >
          <Typography mt={'8vh'} variant="h1"fontWeight={"bold"} fontSize={150}   >
            WitChat
          </Typography>
        <Paper
          elevation={10}
          sx={{
            
            display: "flex",          
            flexDirection: "column",  
            alignItems: "center",
            width: '45vw',
            height: 'auto',
            marginTop: 5,
            textAlign: "center",
            position: 'relative',
            py: 4,
            borderRadius: 8,
          }}
        >
          <Typography variant="h2" mt={4} px={'5%'} fontWeight={"bold"}   >
            Đăng nhập
          </Typography>
          
          <Box display={"flex"}
              flexDirection={"column"}
              width={'40%'}
              sx={{mt: '5%'}}
              gap={4}  
              
            >  
            <TextField 
              label="Tên đăng nhập"
                InputLabelProps={{
                sx: {
                  p: 1,
                  fontSize: 20,
                  }
                }}
              sx={{ 
                '& .MuiOutlinedInput-root': {
                  borderRadius: 6,
                  fontSize: 20,
                  padding:1,
                },
                borderRadius: 6
              }}
            /> 
            <TextField label="Mật khẩu" type="password" fullWidth
                InputLabelProps={{
                  sx: {
                    p: 1,
                    fontSize: 20,
                    }
                  }}
                sx={{ 
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 6,
                    fontSize: 20,
                    padding:1,
                  },

                  borderRadius: 6
                }}
            />
          </Box>
          <Button
          
            sx={{
              color:"#000000",
              mt: 2,
              ml:'50%',
              fontSize: '1.1rem',
              "&:hover": {
                color: "rgba(0, 0, 0, 0.6)",
          },
          borderColor: "#000000"
            }}
          >
            Quên mật khẩu
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            sx={{
              mt: 3,
              width: '25%',
              padding: '12px 0px',
              borderRadius: 7,
              fontSize: '1.2rem'
            }}
          >
            Đăng nhập</Button> 
          <Button
            variant="outlined"
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
  </Container>
  );
}
