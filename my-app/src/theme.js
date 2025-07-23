import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#A1887F", // Màu chính (nút đăng nhập, đường viền sidebar, icon)
    },
    secondary: {
      main: "#E8DCD1", // Nền các khối nội dung chính
    },
    background: {
      default: "#ffffffff", // Nền tổng thể
      neutral: "#A1887F", // Thanh upbar, input
      paper: "#D6C2B5", // Các khối như hộp đăng nhập, hộp thông tin
    },
    text: {
      primary: "#3B2F2F", // Tiêu đề
      secondary: "#2A2A2A", // Nội dung phụ, Tên user
      content: "#5E5E5E", // Nội dung tin nhắn
      disabled: "#9C8B86", // Trạng thái không hoạt động
    },
    success: {
      main: "#81F885", // Trạng thái online
    },
    divider: "#D9D9D9",
  },
  typography: {
    fontFamily: `'Roboto', 'Helvetica', 'Arial', sans-serif`,
    button: {
      textTransform: "none", // Giữ nguyên chữ hoa/thường
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: "8px 20px",
          borderBlockColor:"#000000"
        },
        outlinedPrimary: {
          backgroundColor: "#EFE6DD", // Các nút chức năng chính
          color: "#fff",
          "&:hover": {
            backgroundColor: "rgba(140, 110, 99, 0.5)",
          },
          borderColor: "#000000"
          
        },
        outlinedSecondary: {
          backgroundColor: "rgba(140, 110, 99, 1)",  // Các nút đăng nhập, đổi mật khẩu...
          color: "#FFFFFF",
          "&:hover": {
            backgroundColor: "rgba(140, 110, 99, 0.7)",
          },
          borderColor: "#000000"
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          
        },
       
      },
    },
  },
});

export default theme;
