import { useEffect, useState } from "react";
import api from "../services/api";
import {
  Box,
  Typography,
  Grid,
  Container,
  CircularProgress,
} from "@mui/material";
import UserCard from "../components/UserCard";

type User = {
  id: number;
  name: string;
  email: string;
  avatar: string;
  role?: string;
};

export default function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/users?limit=20&offset=0").then((res) => {
      setUsers(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <Box sx={{ bgcolor: "#f0f2f5", minHeight: "100vh", py: 10 }}>
      <Container maxWidth="xl">
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          sx={{ textAlign: "start", mb: 5, color: "#333" }}
        >
          👥 Utilisateurs
        </Typography>

        {loading ? (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
            <CircularProgress size={50} />
          </Box>
        ) : (
          <Grid container spacing={4} sx={{ justifyContent: "flex-start" }}>
            {users.map((user) => (
              <Grid item xs={12} sm={6} md={4} lg={4} xl={4} key={user.id}>
                <UserCard user={user} />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
}
