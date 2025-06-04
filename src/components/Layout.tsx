import { Outlet } from "react-router-dom";
import { Box, CssBaseline } from "@mui/material";
import Navbar from "./Navbar";
import { useAuth } from "../context/AuthContext";

const Layout = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Outlet />;
  }

  return (
    <Box sx={{ display: "flex", width: "100vw" }}>
      <CssBaseline />
      <Navbar />
      <Box
        component="main"
        sx={{
          width: "100%",
          overflow: "hidden",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
