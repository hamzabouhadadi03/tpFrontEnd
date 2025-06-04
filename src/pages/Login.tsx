// src/pages/Login.tsx
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Avatar,
  Typography,
  TextField,
  Button,
  Paper,
  CssBaseline,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/products");
    } catch (error) {
      alert("Login failed");
    }
  };

  return (
    <>
      <CssBaseline />
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          width: "100vw",
          backgroundColor: "#f5f5f5",
        }}
      >
        <Paper
          elevation={3}
          style={{
            padding: "2rem",
            width: "100%",
            maxWidth: "400px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ bgcolor: "primary.main", mb: 2 }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" gutterBottom>
            Connexion
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            style={{ width: "100%" }}
          >
            <TextField
              fullWidth
              margin="normal"
              required
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              fullWidth
              margin="normal"
              required
              label="Mot de passe"
              type="password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              type="submit"
              style={{ marginTop: "2rem" }}
            >
              Se connecter
            </Button>
          </Box>
        </Paper>
      </Box>
    </>
  );
}
